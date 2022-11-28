import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRefundFundsTransferSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
