import { SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnAuthorizationRuleStatus } from "./clientvpnauthorizationrulestatus";
/**
 * Information about an authorization rule.
**/
export declare class AuthorizationRule extends SpeakeasyBase {
    accessAll?: boolean;
    clientVpnEndpointId?: string;
    description?: string;
    destinationCidr?: string;
    groupId?: string;
    status?: ClientVpnAuthorizationRuleStatus;
}
