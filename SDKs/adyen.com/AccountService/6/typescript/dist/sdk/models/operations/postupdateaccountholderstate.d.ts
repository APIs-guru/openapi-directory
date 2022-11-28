import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUpdateAccountHolderStateSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostUpdateAccountHolderStateRequest extends SpeakeasyBase {
    request?: any;
    security: PostUpdateAccountHolderStateSecurity;
}
export declare class PostUpdateAccountHolderStateResponse extends SpeakeasyBase {
    contentType: string;
    getAccountHolderStatusResponse?: any;
    serviceError?: any;
    statusCode: number;
}
