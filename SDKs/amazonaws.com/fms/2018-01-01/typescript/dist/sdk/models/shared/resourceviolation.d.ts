import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Violation detail based on resource type.
**/
export declare class ResourceViolation extends SpeakeasyBase {
    awsEc2InstanceViolation?: AwsEc2InstanceViolation;
    awsEc2NetworkInterfaceViolation?: AwsEc2NetworkInterfaceViolation;
    awsVpcSecurityGroupViolation?: AwsVpcSecurityGroupViolation;
    dnsDuplicateRuleGroupViolation?: DnsDuplicateRuleGroupViolation;
    dnsRuleGroupLimitExceededViolation?: DnsRuleGroupLimitExceededViolation;
    dnsRuleGroupPriorityConflictViolation?: DnsRuleGroupPriorityConflictViolation;
    networkFirewallBlackHoleRouteDetectedViolation?: NetworkFirewallBlackHoleRouteDetectedViolation;
    networkFirewallInternetTrafficNotInspectedViolation?: NetworkFirewallInternetTrafficNotInspectedViolation;
    networkFirewallInvalidRouteConfigurationViolation?: NetworkFirewallInvalidRouteConfigurationViolation;
    networkFirewallMissingExpectedRtViolation?: NetworkFirewallMissingExpectedRtViolation;
    networkFirewallMissingExpectedRoutesViolation?: NetworkFirewallMissingExpectedRoutesViolation;
    networkFirewallMissingFirewallViolation?: NetworkFirewallMissingFirewallViolation;
    networkFirewallMissingSubnetViolation?: NetworkFirewallMissingSubnetViolation;
    networkFirewallPolicyModifiedViolation?: NetworkFirewallPolicyModifiedViolation;
    networkFirewallUnexpectedFirewallRoutesViolation?: NetworkFirewallUnexpectedFirewallRoutesViolation;
    networkFirewallUnexpectedGatewayRoutesViolation?: NetworkFirewallUnexpectedGatewayRoutesViolation;
    possibleRemediationActions?: PossibleRemediationActions;
}
