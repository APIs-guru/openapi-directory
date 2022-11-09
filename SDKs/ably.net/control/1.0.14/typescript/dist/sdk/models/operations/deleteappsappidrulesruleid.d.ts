import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteAppsAppIdRulesRuleIdPathParams extends SpeakeasyBase {
    appId: string;
    ruleId: string;
}
export declare class DeleteAppsAppIdRulesRuleIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeleteAppsAppIdRulesRuleIdRequest extends SpeakeasyBase {
    pathParams: DeleteAppsAppIdRulesRuleIdPathParams;
    security: DeleteAppsAppIdRulesRuleIdSecurity;
}
export declare class DeleteAppsAppIdRulesRuleIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
