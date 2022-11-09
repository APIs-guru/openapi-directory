import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutProfileObjectTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ObjectTypeName" })
  objectTypeName: string;
}


export class PutProfileObjectTypeHeaders extends SpeakeasyBase {
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


export class PutProfileObjectTypeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowProfileCreation" })
  allowProfileCreation?: boolean;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=EncryptionKey" })
  encryptionKey?: string;

  @Metadata({ data: "json, name=ExpirationDays" })
  expirationDays?: number;

  @Metadata({ data: "json, name=Fields", elemType: shared.ObjectTypeField })
  fields?: Map<string, shared.ObjectTypeField>;

  @Metadata({ data: "json, name=Keys", elemType: shared.ObjectTypeKey, elemDepth: 2 })
  keys?: Map<string, shared.ObjectTypeKey[]>;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=TemplateId" })
  templateId?: string;
}


export class PutProfileObjectTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutProfileObjectTypePathParams;

  @Metadata()
  headers: PutProfileObjectTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutProfileObjectTypeRequestBody;
}


export class PutProfileObjectTypeResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  putProfileObjectTypeResponse?: shared.PutProfileObjectTypeResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
