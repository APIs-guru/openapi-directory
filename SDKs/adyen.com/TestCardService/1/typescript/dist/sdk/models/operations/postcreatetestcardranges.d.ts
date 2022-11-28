import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCreateTestCardRangesSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostCreateTestCardRangesRequest extends SpeakeasyBase {
    request?: any;
    security: PostCreateTestCardRangesSecurity;
}
export declare class PostCreateTestCardRangesResponse extends SpeakeasyBase {
    contentType: string;
    createTestCardRangesResult?: any;
    serviceError?: any;
    statusCode: number;
}
