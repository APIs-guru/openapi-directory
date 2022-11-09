import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTransferFundsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostTransferFundsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostTransferFundsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostTransferFundsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostTransferFundsSecurityOption2;
}


export class PostTransferFundsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostTransferFundsSecurity;
}


export class PostTransferFundsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  transferFundsResponse?: any;
}
