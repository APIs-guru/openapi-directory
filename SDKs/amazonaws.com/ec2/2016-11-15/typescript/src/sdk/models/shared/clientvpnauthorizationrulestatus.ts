import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnAuthorizationRuleStatusCodeEnum } from "./clientvpnauthorizationrulestatuscodeenum";



// ClientVpnAuthorizationRuleStatus
/** 
 * Describes the state of an authorization rule.
**/
export class ClientVpnAuthorizationRuleStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: ClientVpnAuthorizationRuleStatusCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}
