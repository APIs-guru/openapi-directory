import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostAppsAppIdRulesPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class PostAppsAppIdRulesSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostAppsAppIdRulesRequest extends SpeakeasyBase {
    pathParams: PostAppsAppIdRulesPathParams;
    request?: any;
    security: PostAppsAppIdRulesSecurity;
}
export declare class PostAppsAppIdRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    ruleResponse?: any;
}
