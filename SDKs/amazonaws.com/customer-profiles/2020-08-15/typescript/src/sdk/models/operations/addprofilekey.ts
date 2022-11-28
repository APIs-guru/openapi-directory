import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddProfileKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class AddProfileKeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class AddProfileKeyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyName" })
  keyName: string;

  @SpeakeasyMetadata({ data: "json, name=ProfileId" })
  profileId: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}


export class AddProfileKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddProfileKeyPathParams;

  @SpeakeasyMetadata()
  headers: AddProfileKeyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddProfileKeyRequestBody;
}


export class AddProfileKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  addProfileKeyResponse?: shared.AddProfileKeyResponse;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
