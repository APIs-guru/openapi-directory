import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisAclRule } from "./analysisaclrule";
import { AnalysisComponent } from "./analysiscomponent";
import { AnalysisPacketHeader } from "./analysispacketheader";
import { AnalysisRouteTableRoute } from "./analysisroutetableroute";
import { AnalysisSecurityGroupRule } from "./analysissecuritygrouprule";



// PathComponent
/** 
 * Describes a path component.
**/
export class PathComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aclRule?: AnalysisAclRule;

  @SpeakeasyMetadata()
  component?: AnalysisComponent;

  @SpeakeasyMetadata()
  destinationVpc?: AnalysisComponent;

  @SpeakeasyMetadata()
  inboundHeader?: AnalysisPacketHeader;

  @SpeakeasyMetadata()
  outboundHeader?: AnalysisPacketHeader;

  @SpeakeasyMetadata()
  routeTableRoute?: AnalysisRouteTableRoute;

  @SpeakeasyMetadata()
  securityGroupRule?: AnalysisSecurityGroupRule;

  @SpeakeasyMetadata()
  sequenceNumber?: number;

  @SpeakeasyMetadata()
  sourceVpc?: AnalysisComponent;

  @SpeakeasyMetadata()
  subnet?: AnalysisComponent;

  @SpeakeasyMetadata()
  vpc?: AnalysisComponent;
}
