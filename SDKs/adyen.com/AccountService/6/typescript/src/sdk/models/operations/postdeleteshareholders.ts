import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDeleteShareholdersSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostDeleteShareholdersSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostDeleteShareholdersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostDeleteShareholdersSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostDeleteShareholdersSecurityOption2;
}


export class PostDeleteShareholdersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostDeleteShareholdersSecurity;
}


export class PostDeleteShareholdersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  genericResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
