import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUploadDocumentSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostUploadDocumentSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostUploadDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostUploadDocumentSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostUploadDocumentSecurityOption2;
}


export class PostUploadDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostUploadDocumentSecurity;
}


export class PostUploadDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateAccountHolderResponse?: any;
}
