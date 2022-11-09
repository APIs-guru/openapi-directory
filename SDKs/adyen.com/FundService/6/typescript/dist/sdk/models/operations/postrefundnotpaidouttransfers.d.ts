import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostRefundNotPaidOutTransfersSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostRefundNotPaidOutTransfersSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostRefundNotPaidOutTransfersSecurity extends SpeakeasyBase {
    option1?: PostRefundNotPaidOutTransfersSecurityOption1;
    option2?: PostRefundNotPaidOutTransfersSecurityOption2;
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
