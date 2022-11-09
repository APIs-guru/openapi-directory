import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostListRecurringDetailsSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostListRecurringDetailsSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostListRecurringDetailsSecurity extends SpeakeasyBase {
    option1?: PostListRecurringDetailsSecurityOption1;
    option2?: PostListRecurringDetailsSecurityOption2;
}
export declare class PostListRecurringDetailsRequest extends SpeakeasyBase {
    request?: any;
    security: PostListRecurringDetailsSecurity;
}
export declare class PostListRecurringDetailsResponse extends SpeakeasyBase {
    contentType: string;
    recurringDetailsResult?: any;
    serviceError?: any;
    statusCode: number;
}
