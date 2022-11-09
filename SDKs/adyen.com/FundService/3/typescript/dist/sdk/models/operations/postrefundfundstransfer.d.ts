import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostRefundFundsTransferSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostRefundFundsTransferSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostRefundFundsTransferSecurity extends SpeakeasyBase {
    option1?: PostRefundFundsTransferSecurityOption1;
    option2?: PostRefundFundsTransferSecurityOption2;
}
export declare class PostRefundFundsTransferRequest extends SpeakeasyBase {
    request?: any;
    security: PostRefundFundsTransferSecurity;
}
export declare class PostRefundFundsTransferResponse extends SpeakeasyBase {
    contentType: string;
    refundFundsTransferResponse?: any;
    serviceError?: any;
    statusCode: number;
}
