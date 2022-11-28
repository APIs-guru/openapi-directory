import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchAppsAppIdRulesRuleIdPathParams extends SpeakeasyBase {
    appId: string;
    ruleId: string;
}
export declare class PatchAppsAppIdRulesRuleIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PatchAppsAppIdRulesRuleIdRequest extends SpeakeasyBase {
    pathParams: PatchAppsAppIdRulesRuleIdPathParams;
    request?: any;
    security: PatchAppsAppIdRulesRuleIdSecurity;
}
export declare class PatchAppsAppIdRulesRuleIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    ruleResponse?: any;
}
