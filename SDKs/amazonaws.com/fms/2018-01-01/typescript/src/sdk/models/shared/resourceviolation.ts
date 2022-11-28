import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2InstanceViolation } from "./awsec2instanceviolation";
import { AwsEc2NetworkInterfaceViolation } from "./awsec2networkinterfaceviolation";
import { AwsVpcSecurityGroupViolation } from "./awsvpcsecuritygroupviolation";
import { DnsDuplicateRuleGroupViolation } from "./dnsduplicaterulegroupviolation";
import { DnsRuleGroupLimitExceededViolation } from "./dnsrulegrouplimitexceededviolation";
import { DnsRuleGroupPriorityConflictViolation } from "./dnsrulegrouppriorityconflictviolation";
import { NetworkFirewallBlackHoleRouteDetectedViolation } from "./networkfirewallblackholeroutedetectedviolation";
import { NetworkFirewallInternetTrafficNotInspectedViolation } from "./networkfirewallinternettrafficnotinspectedviolation";
import { NetworkFirewallInvalidRouteConfigurationViolation } from "./networkfirewallinvalidrouteconfigurationviolation";
import { NetworkFirewallMissingExpectedRtViolation } from "./networkfirewallmissingexpectedrtviolation";
import { NetworkFirewallMissingExpectedRoutesViolation } from "./networkfirewallmissingexpectedroutesviolation";
import { NetworkFirewallMissingFirewallViolation } from "./networkfirewallmissingfirewallviolation";
import { NetworkFirewallMissingSubnetViolation } from "./networkfirewallmissingsubnetviolation";
import { NetworkFirewallPolicyModifiedViolation } from "./networkfirewallpolicymodifiedviolation";
import { NetworkFirewallUnexpectedFirewallRoutesViolation } from "./networkfirewallunexpectedfirewallroutesviolation";
import { NetworkFirewallUnexpectedGatewayRoutesViolation } from "./networkfirewallunexpectedgatewayroutesviolation";
import { PossibleRemediationActions } from "./possibleremediationactions";



// ResourceViolation
/** 
 * Violation detail based on resource type.
**/
export class ResourceViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsEc2InstanceViolation" })
  awsEc2InstanceViolation?: AwsEc2InstanceViolation;

  @SpeakeasyMetadata({ data: "json, name=AwsEc2NetworkInterfaceViolation" })
  awsEc2NetworkInterfaceViolation?: AwsEc2NetworkInterfaceViolation;

  @SpeakeasyMetadata({ data: "json, name=AwsVPCSecurityGroupViolation" })
  awsVpcSecurityGroupViolation?: AwsVpcSecurityGroupViolation;

  @SpeakeasyMetadata({ data: "json, name=DnsDuplicateRuleGroupViolation" })
  dnsDuplicateRuleGroupViolation?: DnsDuplicateRuleGroupViolation;

  @SpeakeasyMetadata({ data: "json, name=DnsRuleGroupLimitExceededViolation" })
  dnsRuleGroupLimitExceededViolation?: DnsRuleGroupLimitExceededViolation;

  @SpeakeasyMetadata({ data: "json, name=DnsRuleGroupPriorityConflictViolation" })
  dnsRuleGroupPriorityConflictViolation?: DnsRuleGroupPriorityConflictViolation;

  @SpeakeasyMetadata({ data: "json, name=NetworkFirewallBlackHoleRouteDetectedViolation" })
  networkFirewallBlackHoleRouteDetectedViolation?: NetworkFirewallBlackHoleRouteDetectedViolation;

  @SpeakeasyMetadata({ data: "json, name=NetworkFirewallInternetTrafficNotInspectedViolation" })
  networkFirewallInternetTrafficNotInspectedViolation?: NetworkFirewallInternetTrafficNotInspectedViolation;

  @SpeakeasyMetadata({ data: "json, name=NetworkFirewallInvalidRouteConfigurationViolation" })
  networkFirewallInvalidRouteConfigurationViolation?: NetworkFirewallInvalidRouteConfigurationViolation;

  @SpeakeasyMetadata({ data: "json, name=NetworkFirewallMissingExpectedRTViolation" })
  networkFirewallMissingExpectedRtViolation?: NetworkFirewallMissingExpectedRtViolation;

  @SpeakeasyMetadata({ data: "json, name=NetworkFirewallMissingExpectedRoutesViolation" })
  networkFirewallMissingExpectedRoutesViolation?: NetworkFirewallMissingExpectedRoutesViolation;

  @SpeakeasyMetadata({ data: "json, name=NetworkFirewallMissingFirewallViolation" })
  networkFirewallMissingFirewallViolation?: NetworkFirewallMissingFirewallViolation;

  @SpeakeasyMetadata({ data: "json, name=NetworkFirewallMissingSubnetViolation" })
  networkFirewallMissingSubnetViolation?: NetworkFirewallMissingSubnetViolation;

  @SpeakeasyMetadata({ data: "json, name=NetworkFirewallPolicyModifiedViolation" })
  networkFirewallPolicyModifiedViolation?: NetworkFirewallPolicyModifiedViolation;

  @SpeakeasyMetadata({ data: "json, name=NetworkFirewallUnexpectedFirewallRoutesViolation" })
  networkFirewallUnexpectedFirewallRoutesViolation?: NetworkFirewallUnexpectedFirewallRoutesViolation;

  @SpeakeasyMetadata({ data: "json, name=NetworkFirewallUnexpectedGatewayRoutesViolation" })
  networkFirewallUnexpectedGatewayRoutesViolation?: NetworkFirewallUnexpectedGatewayRoutesViolation;

  @SpeakeasyMetadata({ data: "json, name=PossibleRemediationActions" })
  possibleRemediationActions?: PossibleRemediationActions;
}
