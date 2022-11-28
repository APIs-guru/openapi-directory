import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostListRecurringDetailsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
