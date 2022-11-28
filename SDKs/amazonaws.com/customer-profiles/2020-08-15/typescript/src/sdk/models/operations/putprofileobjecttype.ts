import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutProfileObjectTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ObjectTypeName" })
  objectTypeName: string;
}


export class PutProfileObjectTypeHeaders extends SpeakeasyBase {
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


export class PutProfileObjectTypeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowProfileCreation" })
  allowProfileCreation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=EncryptionKey" })
  encryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDays" })
  expirationDays?: number;

  @SpeakeasyMetadata({ data: "json, name=Fields", elemType: shared.ObjectTypeField })
  fields?: Map<string, shared.ObjectTypeField>;

  @SpeakeasyMetadata({ data: "json, name=Keys", elemType: shared.ObjectTypeKey, elemDepth: 2 })
  keys?: Map<string, shared.ObjectTypeKey[]>;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=TemplateId" })
  templateId?: string;
}


export class PutProfileObjectTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutProfileObjectTypePathParams;

  @SpeakeasyMetadata()
  headers: PutProfileObjectTypeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutProfileObjectTypeRequestBody;
}


export class PutProfileObjectTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  putProfileObjectTypeResponse?: shared.PutProfileObjectTypeResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
