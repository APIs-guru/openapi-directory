import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostSetupBeneficiarySecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostSetupBeneficiarySecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostSetupBeneficiarySecurity extends SpeakeasyBase {
    option1?: PostSetupBeneficiarySecurityOption1;
    option2?: PostSetupBeneficiarySecurityOption2;
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
