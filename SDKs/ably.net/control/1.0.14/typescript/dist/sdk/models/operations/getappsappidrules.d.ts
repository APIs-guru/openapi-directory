import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAppsAppIdRulesPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class GetAppsAppIdRulesSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAppsAppIdRulesRequest extends SpeakeasyBase {
    pathParams: GetAppsAppIdRulesPathParams;
    security: GetAppsAppIdRulesSecurity;
}
export declare class GetAppsAppIdRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    ruleResponses?: any[];
}
