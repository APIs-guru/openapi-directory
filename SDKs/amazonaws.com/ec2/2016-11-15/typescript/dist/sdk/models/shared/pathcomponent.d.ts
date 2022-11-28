import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisAclRule } from "./analysisaclrule";
import { AnalysisComponent } from "./analysiscomponent";
import { AnalysisPacketHeader } from "./analysispacketheader";
import { AnalysisRouteTableRoute } from "./analysisroutetableroute";
import { AnalysisSecurityGroupRule } from "./analysissecuritygrouprule";
/**
 * Describes a path component.
**/
export declare class PathComponent extends SpeakeasyBase {
    aclRule?: AnalysisAclRule;
    component?: AnalysisComponent;
    destinationVpc?: AnalysisComponent;
    inboundHeader?: AnalysisPacketHeader;
    outboundHeader?: AnalysisPacketHeader;
    routeTableRoute?: AnalysisRouteTableRoute;
    securityGroupRule?: AnalysisSecurityGroupRule;
    sequenceNumber?: number;
    sourceVpc?: AnalysisComponent;
    subnet?: AnalysisComponent;
    vpc?: AnalysisComponent;
}
