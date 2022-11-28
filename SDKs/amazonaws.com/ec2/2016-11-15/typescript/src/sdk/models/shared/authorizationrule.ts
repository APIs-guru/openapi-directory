import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnAuthorizationRuleStatus } from "./clientvpnauthorizationrulestatus";



// AuthorizationRule
/** 
 * Information about an authorization rule.
**/
export class AuthorizationRule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessAll?: boolean;

  @SpeakeasyMetadata()
  clientVpnEndpointId?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  destinationCidr?: string;

  @SpeakeasyMetadata()
  groupId?: string;

  @SpeakeasyMetadata()
  status?: ClientVpnAuthorizationRuleStatus;
}
