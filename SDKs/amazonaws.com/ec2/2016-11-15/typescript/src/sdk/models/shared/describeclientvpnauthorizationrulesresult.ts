import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationRule } from "./authorizationrule";



export class DescribeClientVpnAuthorizationRulesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AuthorizationRule })
  authorizationRules?: AuthorizationRule[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
