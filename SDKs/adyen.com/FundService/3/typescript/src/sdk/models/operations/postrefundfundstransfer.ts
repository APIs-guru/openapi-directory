import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRefundFundsTransferSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostRefundFundsTransferSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostRefundFundsTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostRefundFundsTransferSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostRefundFundsTransferSecurityOption2;
}


export class PostRefundFundsTransferRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostRefundFundsTransferSecurity;
}


export class PostRefundFundsTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  refundFundsTransferResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
