import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnAuthorizationRuleStatus } from "./clientvpnauthorizationrulestatus";



export class AuthorizeClientVpnIngressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: ClientVpnAuthorizationRuleStatus;
}
