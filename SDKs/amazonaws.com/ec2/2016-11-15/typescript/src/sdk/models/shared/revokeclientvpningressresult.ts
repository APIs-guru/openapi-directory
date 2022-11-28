import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnAuthorizationRuleStatus } from "./clientvpnauthorizationrulestatus";



export class RevokeClientVpnIngressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: ClientVpnAuthorizationRuleStatus;
}
