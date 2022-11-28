import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisComponent } from "./analysiscomponent";
import { AnalysisAclRule } from "./analysisaclrule";
import { AnalysisLoadBalancerListener } from "./analysisloadbalancerlistener";
import { AnalysisLoadBalancerTarget } from "./analysisloadbalancertarget";
import { PortRange } from "./portrange";
import { AnalysisRouteTableRoute } from "./analysisroutetableroute";
import { AnalysisSecurityGroupRule } from "./analysissecuritygrouprule";
/**
 * Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.
**/
export declare class Explanation extends SpeakeasyBase {
    acl?: AnalysisComponent;
    aclRule?: AnalysisAclRule;
    address?: string;
    addresses?: string[];
    attachedTo?: AnalysisComponent;
    availabilityZones?: string[];
    cidrs?: string[];
    classicLoadBalancerListener?: AnalysisLoadBalancerListener;
    component?: AnalysisComponent;
    customerGateway?: AnalysisComponent;
    destination?: AnalysisComponent;
    destinationVpc?: AnalysisComponent;
    direction?: string;
    elasticLoadBalancerListener?: AnalysisComponent;
    explanationCode?: string;
    ingressRouteTable?: AnalysisComponent;
    internetGateway?: AnalysisComponent;
    loadBalancerArn?: string;
    loadBalancerListenerPort?: number;
    loadBalancerTarget?: AnalysisLoadBalancerTarget;
    loadBalancerTargetGroup?: AnalysisComponent;
    loadBalancerTargetGroups?: AnalysisComponent[];
    loadBalancerTargetPort?: number;
    missingComponent?: string;
    natGateway?: AnalysisComponent;
    networkInterface?: AnalysisComponent;
    packetField?: string;
    port?: number;
    portRanges?: PortRange[];
    prefixList?: AnalysisComponent;
    protocols?: string[];
    routeTable?: AnalysisComponent;
    routeTableRoute?: AnalysisRouteTableRoute;
    securityGroup?: AnalysisComponent;
    securityGroupRule?: AnalysisSecurityGroupRule;
    securityGroups?: AnalysisComponent[];
    sourceVpc?: AnalysisComponent;
    state?: string;
    subnet?: AnalysisComponent;
    subnetRouteTable?: AnalysisComponent;
    vpc?: AnalysisComponent;
    vpcEndpoint?: AnalysisComponent;
    vpcPeeringConnection?: AnalysisComponent;
    vpnConnection?: AnalysisComponent;
    vpnGateway?: AnalysisComponent;
}
