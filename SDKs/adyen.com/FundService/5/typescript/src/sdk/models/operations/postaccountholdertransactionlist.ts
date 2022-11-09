import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAccountHolderTransactionListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostAccountHolderTransactionListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostAccountHolderTransactionListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostAccountHolderTransactionListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostAccountHolderTransactionListSecurityOption2;
}


export class PostAccountHolderTransactionListRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostAccountHolderTransactionListSecurity;
}


export class PostAccountHolderTransactionListResponse extends SpeakeasyBase {
  @Metadata()
  accountHolderTransactionListResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
