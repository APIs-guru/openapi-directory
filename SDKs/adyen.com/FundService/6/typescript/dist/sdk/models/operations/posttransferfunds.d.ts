import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTransferFundsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostTransferFundsRequest extends SpeakeasyBase {
    request?: any;
    security: PostTransferFundsSecurity;
}
export declare class PostTransferFundsResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    statusCode: number;
    transferFundsResponse?: any;
}
