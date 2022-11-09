import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRefundNotPaidOutTransfersSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostRefundNotPaidOutTransfersSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostRefundNotPaidOutTransfersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostRefundNotPaidOutTransfersSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostRefundNotPaidOutTransfersSecurityOption2;
}


export class PostRefundNotPaidOutTransfersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostRefundNotPaidOutTransfersSecurity;
}


export class PostRefundNotPaidOutTransfersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  refundNotPaidOutTransfersResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
