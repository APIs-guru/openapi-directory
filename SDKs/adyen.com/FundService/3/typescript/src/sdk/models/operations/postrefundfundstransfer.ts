import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRefundFundsTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PostRefundFundsTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: PostRefundFundsTransferSecurity;
}


export class PostRefundFundsTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  refundFundsTransferResponse?: any;

  @SpeakeasyMetadata()
  serviceError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
