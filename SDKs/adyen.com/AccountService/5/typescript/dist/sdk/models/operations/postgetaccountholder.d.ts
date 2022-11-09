import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostGetAccountHolderSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostGetAccountHolderSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostGetAccountHolderSecurity extends SpeakeasyBase {
    option1?: PostGetAccountHolderSecurityOption1;
    option2?: PostGetAccountHolderSecurityOption2;
}
export declare class PostGetAccountHolderRequest extends SpeakeasyBase {
    request?: any;
    security: PostGetAccountHolderSecurity;
}
export declare class PostGetAccountHolderResponse extends SpeakeasyBase {
    contentType: string;
    getAccountHolderResponse?: any;
    serviceError?: any;
    statusCode: number;
}
