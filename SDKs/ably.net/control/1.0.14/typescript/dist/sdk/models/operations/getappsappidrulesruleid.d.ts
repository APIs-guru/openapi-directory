import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAppsAppIdRulesRuleIdPathParams extends SpeakeasyBase {
    appId: string;
    ruleId: string;
}
export declare class GetAppsAppIdRulesRuleIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAppsAppIdRulesRuleIdRequest extends SpeakeasyBase {
    pathParams: GetAppsAppIdRulesRuleIdPathParams;
    security: GetAppsAppIdRulesRuleIdSecurity;
}
export declare class GetAppsAppIdRulesRuleIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    ruleResponse?: any;
}
