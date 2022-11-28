import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGetTaxFormSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostGetTaxFormRequest extends SpeakeasyBase {
    request?: any;
    security: PostGetTaxFormSecurity;
}
export declare class PostGetTaxFormResponse extends SpeakeasyBase {
    contentType: string;
    getTaxFormResponse?: any;
    serviceError?: any;
    statusCode: number;
}
