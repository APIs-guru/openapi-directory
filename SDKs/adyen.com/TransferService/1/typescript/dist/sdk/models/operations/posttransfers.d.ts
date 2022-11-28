import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTransfersSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostTransfersRequest extends SpeakeasyBase {
    request?: any;
    security: PostTransfersSecurity;
}
export declare class PostTransfersResponse extends SpeakeasyBase {
    contentType: string;
    restServiceError?: any;
    statusCode: number;
    transferOld?: any;
}
