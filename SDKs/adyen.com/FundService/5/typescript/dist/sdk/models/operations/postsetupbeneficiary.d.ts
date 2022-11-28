import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupBeneficiarySecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostSetupBeneficiaryRequest extends SpeakeasyBase {
    request?: any;
    security: PostSetupBeneficiarySecurity;
}
export declare class PostSetupBeneficiaryResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    setupBeneficiaryResponse?: any;
    statusCode: number;
}
