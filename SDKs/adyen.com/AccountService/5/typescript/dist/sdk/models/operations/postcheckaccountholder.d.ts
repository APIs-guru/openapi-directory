import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostCheckAccountHolderSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostCheckAccountHolderSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostCheckAccountHolderSecurity extends SpeakeasyBase {
    option1?: PostCheckAccountHolderSecurityOption1;
    option2?: PostCheckAccountHolderSecurityOption2;
}
export declare class PostCheckAccountHolderRequest extends SpeakeasyBase {
    request?: any;
    security: PostCheckAccountHolderSecurity;
}
export declare class PostCheckAccountHolderResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: any;
    serviceError?: any;
    statusCode: number;
}
