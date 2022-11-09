import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostUpdateAccountHolderStateSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostUpdateAccountHolderStateSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostUpdateAccountHolderStateSecurity extends SpeakeasyBase {
    option1?: PostUpdateAccountHolderStateSecurityOption1;
    option2?: PostUpdateAccountHolderStateSecurityOption2;
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
