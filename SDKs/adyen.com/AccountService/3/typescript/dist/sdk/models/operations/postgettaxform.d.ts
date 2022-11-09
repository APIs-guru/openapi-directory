import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostGetTaxFormSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostGetTaxFormSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostGetTaxFormSecurity extends SpeakeasyBase {
    option1?: PostGetTaxFormSecurityOption1;
    option2?: PostGetTaxFormSecurityOption2;
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
