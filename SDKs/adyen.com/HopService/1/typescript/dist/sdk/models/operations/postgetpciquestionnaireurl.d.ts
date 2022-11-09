import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostGetPciQuestionnaireUrlSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostGetPciQuestionnaireUrlSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostGetPciQuestionnaireUrlSecurity extends SpeakeasyBase {
    option1?: PostGetPciQuestionnaireUrlSecurityOption1;
    option2?: PostGetPciQuestionnaireUrlSecurityOption2;
}
export declare class PostGetPciQuestionnaireUrlRequest extends SpeakeasyBase {
    request?: any;
    security: PostGetPciQuestionnaireUrlSecurity;
}
export declare class PostGetPciQuestionnaireUrlResponse extends SpeakeasyBase {
    contentType: string;
    getPciUrlResponse?: any;
    serviceError?: any;
    statusCode: number;
}
