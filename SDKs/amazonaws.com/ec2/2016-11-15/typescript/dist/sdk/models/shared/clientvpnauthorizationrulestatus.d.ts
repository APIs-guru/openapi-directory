import { SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnAuthorizationRuleStatusCodeEnum } from "./clientvpnauthorizationrulestatuscodeenum";
/**
 * Describes the state of an authorization rule.
**/
export declare class ClientVpnAuthorizationRuleStatus extends SpeakeasyBase {
    code?: ClientVpnAuthorizationRuleStatusCodeEnum;
    message?: string;
}
