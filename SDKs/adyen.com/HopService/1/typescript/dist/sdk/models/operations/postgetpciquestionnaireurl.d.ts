import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGetPciQuestionnaireUrlSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
