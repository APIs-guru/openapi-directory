import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostTransferFundsSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostTransferFundsSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostTransferFundsSecurity extends SpeakeasyBase {
    option1?: PostTransferFundsSecurityOption1;
    option2?: PostTransferFundsSecurityOption2;
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
