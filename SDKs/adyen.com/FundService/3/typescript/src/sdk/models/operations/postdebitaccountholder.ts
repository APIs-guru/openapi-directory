import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDebitAccountHolderSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostDebitAccountHolderSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostDebitAccountHolderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostDebitAccountHolderSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostDebitAccountHolderSecurityOption2;
}


export class PostDebitAccountHolderRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostDebitAccountHolderSecurity;
}


export class PostDebitAccountHolderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  debitAccountHolderResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
