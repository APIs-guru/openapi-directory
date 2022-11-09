import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAccountHolderBalanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostAccountHolderBalanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostAccountHolderBalanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostAccountHolderBalanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostAccountHolderBalanceSecurityOption2;
}


export class PostAccountHolderBalanceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostAccountHolderBalanceSecurity;
}


export class PostAccountHolderBalanceResponse extends SpeakeasyBase {
  @Metadata()
  accountHolderBalanceResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
