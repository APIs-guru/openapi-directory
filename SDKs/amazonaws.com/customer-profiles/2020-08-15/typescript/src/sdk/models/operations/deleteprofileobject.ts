import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteProfileObjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class DeleteProfileObjectHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class DeleteProfileObjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectTypeName" })
  objectTypeName: string;

  @Metadata({ data: "json, name=ProfileId" })
  profileId: string;

  @Metadata({ data: "json, name=ProfileObjectUniqueKey" })
  profileObjectUniqueKey: string;
}


export class DeleteProfileObjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProfileObjectPathParams;

  @Metadata()
  headers: DeleteProfileObjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteProfileObjectRequestBody;
}


export class DeleteProfileObjectResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteProfileObjectResponse?: shared.DeleteProfileObjectResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
