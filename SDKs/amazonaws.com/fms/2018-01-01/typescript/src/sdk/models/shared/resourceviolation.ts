import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=AwsEc2InstanceViolation" })
  awsEc2InstanceViolation?: AwsEc2InstanceViolation;

  @Metadata({ data: "json, name=AwsEc2NetworkInterfaceViolation" })
  awsEc2NetworkInterfaceViolation?: AwsEc2NetworkInterfaceViolation;

  @Metadata({ data: "json, name=AwsVPCSecurityGroupViolation" })
  awsVpcSecurityGroupViolation?: AwsVpcSecurityGroupViolation;

  @Metadata({ data: "json, name=DnsDuplicateRuleGroupViolation" })
  dnsDuplicateRuleGroupViolation?: DnsDuplicateRuleGroupViolation;

  @Metadata({ data: "json, name=DnsRuleGroupLimitExceededViolation" })
  dnsRuleGroupLimitExceededViolation?: DnsRuleGroupLimitExceededViolation;

  @Metadata({ data: "json, name=DnsRuleGroupPriorityConflictViolation" })
  dnsRuleGroupPriorityConflictViolation?: DnsRuleGroupPriorityConflictViolation;

  @Metadata({ data: "json, name=NetworkFirewallBlackHoleRouteDetectedViolation" })
  networkFirewallBlackHoleRouteDetectedViolation?: NetworkFirewallBlackHoleRouteDetectedViolation;

  @Metadata({ data: "json, name=NetworkFirewallInternetTrafficNotInspectedViolation" })
  networkFirewallInternetTrafficNotInspectedViolation?: NetworkFirewallInternetTrafficNotInspectedViolation;

  @Metadata({ data: "json, name=NetworkFirewallInvalidRouteConfigurationViolation" })
  networkFirewallInvalidRouteConfigurationViolation?: NetworkFirewallInvalidRouteConfigurationViolation;

  @Metadata({ data: "json, name=NetworkFirewallMissingExpectedRTViolation" })
  networkFirewallMissingExpectedRtViolation?: NetworkFirewallMissingExpectedRtViolation;

  @Metadata({ data: "json, name=NetworkFirewallMissingExpectedRoutesViolation" })
  networkFirewallMissingExpectedRoutesViolation?: NetworkFirewallMissingExpectedRoutesViolation;

  @Metadata({ data: "json, name=NetworkFirewallMissingFirewallViolation" })
  networkFirewallMissingFirewallViolation?: NetworkFirewallMissingFirewallViolation;

  @Metadata({ data: "json, name=NetworkFirewallMissingSubnetViolation" })
  networkFirewallMissingSubnetViolation?: NetworkFirewallMissingSubnetViolation;

  @Metadata({ data: "json, name=NetworkFirewallPolicyModifiedViolation" })
  networkFirewallPolicyModifiedViolation?: NetworkFirewallPolicyModifiedViolation;

  @Metadata({ data: "json, name=NetworkFirewallUnexpectedFirewallRoutesViolation" })
  networkFirewallUnexpectedFirewallRoutesViolation?: NetworkFirewallUnexpectedFirewallRoutesViolation;

  @Metadata({ data: "json, name=NetworkFirewallUnexpectedGatewayRoutesViolation" })
  networkFirewallUnexpectedGatewayRoutesViolation?: NetworkFirewallUnexpectedGatewayRoutesViolation;

  @Metadata({ data: "json, name=PossibleRemediationActions" })
  possibleRemediationActions?: PossibleRemediationActions;
}
