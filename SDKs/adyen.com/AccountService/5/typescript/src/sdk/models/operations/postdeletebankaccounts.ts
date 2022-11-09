import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDeleteBankAccountsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostDeleteBankAccountsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostDeleteBankAccountsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostDeleteBankAccountsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostDeleteBankAccountsSecurityOption2;
}


export class PostDeleteBankAccountsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostDeleteBankAccountsSecurity;
}


export class PostDeleteBankAccountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  genericResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
