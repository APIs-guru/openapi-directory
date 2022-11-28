import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisComponent } from "./analysiscomponent";
import { AnalysisAclRule } from "./analysisaclrule";
import { AnalysisLoadBalancerListener } from "./analysisloadbalancerlistener";
import { AnalysisLoadBalancerTarget } from "./analysisloadbalancertarget";
import { PortRange } from "./portrange";
import { AnalysisRouteTableRoute } from "./analysisroutetableroute";
import { AnalysisSecurityGroupRule } from "./analysissecuritygrouprule";



// Explanation
/** 
 * Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.
**/
export class Explanation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acl?: AnalysisComponent;

  @SpeakeasyMetadata()
  aclRule?: AnalysisAclRule;

  @SpeakeasyMetadata()
  address?: string;

  @SpeakeasyMetadata()
  addresses?: string[];

  @SpeakeasyMetadata()
  attachedTo?: AnalysisComponent;

  @SpeakeasyMetadata()
  availabilityZones?: string[];

  @SpeakeasyMetadata()
  cidrs?: string[];

  @SpeakeasyMetadata()
  classicLoadBalancerListener?: AnalysisLoadBalancerListener;

  @SpeakeasyMetadata()
  component?: AnalysisComponent;

  @SpeakeasyMetadata()
  customerGateway?: AnalysisComponent;

  @SpeakeasyMetadata()
  destination?: AnalysisComponent;

  @SpeakeasyMetadata()
  destinationVpc?: AnalysisComponent;

  @SpeakeasyMetadata()
  direction?: string;

  @SpeakeasyMetadata()
  elasticLoadBalancerListener?: AnalysisComponent;

  @SpeakeasyMetadata()
  explanationCode?: string;

  @SpeakeasyMetadata()
  ingressRouteTable?: AnalysisComponent;

  @SpeakeasyMetadata()
  internetGateway?: AnalysisComponent;

  @SpeakeasyMetadata()
  loadBalancerArn?: string;

  @SpeakeasyMetadata()
  loadBalancerListenerPort?: number;

  @SpeakeasyMetadata()
  loadBalancerTarget?: AnalysisLoadBalancerTarget;

  @SpeakeasyMetadata()
  loadBalancerTargetGroup?: AnalysisComponent;

  @SpeakeasyMetadata({ elemType: AnalysisComponent })
  loadBalancerTargetGroups?: AnalysisComponent[];

  @SpeakeasyMetadata()
  loadBalancerTargetPort?: number;

  @SpeakeasyMetadata()
  missingComponent?: string;

  @SpeakeasyMetadata()
  natGateway?: AnalysisComponent;

  @SpeakeasyMetadata()
  networkInterface?: AnalysisComponent;

  @SpeakeasyMetadata()
  packetField?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata({ elemType: PortRange })
  portRanges?: PortRange[];

  @SpeakeasyMetadata()
  prefixList?: AnalysisComponent;

  @SpeakeasyMetadata()
  protocols?: string[];

  @SpeakeasyMetadata()
  routeTable?: AnalysisComponent;

  @SpeakeasyMetadata()
  routeTableRoute?: AnalysisRouteTableRoute;

  @SpeakeasyMetadata()
  securityGroup?: AnalysisComponent;

  @SpeakeasyMetadata()
  securityGroupRule?: AnalysisSecurityGroupRule;

  @SpeakeasyMetadata({ elemType: AnalysisComponent })
  securityGroups?: AnalysisComponent[];

  @SpeakeasyMetadata()
  sourceVpc?: AnalysisComponent;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata()
  subnet?: AnalysisComponent;

  @SpeakeasyMetadata()
  subnetRouteTable?: AnalysisComponent;

  @SpeakeasyMetadata()
  vpc?: AnalysisComponent;

  @SpeakeasyMetadata()
  vpcEndpoint?: AnalysisComponent;

  @SpeakeasyMetadata()
  vpcPeeringConnection?: AnalysisComponent;

  @SpeakeasyMetadata()
  vpnConnection?: AnalysisComponent;

  @SpeakeasyMetadata()
  vpnGateway?: AnalysisComponent;
}
