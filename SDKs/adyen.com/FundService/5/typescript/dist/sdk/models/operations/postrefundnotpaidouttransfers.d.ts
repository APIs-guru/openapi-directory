import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRefundNotPaidOutTransfersSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostRefundNotPaidOutTransfersRequest extends SpeakeasyBase {
    request?: any;
    security: PostRefundNotPaidOutTransfersSecurity;
}
export declare class PostRefundNotPaidOutTransfersResponse extends SpeakeasyBase {
    contentType: string;
    refundNotPaidOutTransfersResponse?: any;
    serviceError?: any;
    statusCode: number;
}
