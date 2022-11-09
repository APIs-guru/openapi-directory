import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostCreateTestCardRangesSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostCreateTestCardRangesSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostCreateTestCardRangesSecurity extends SpeakeasyBase {
    option1?: PostCreateTestCardRangesSecurityOption1;
    option2?: PostCreateTestCardRangesSecurityOption2;
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
