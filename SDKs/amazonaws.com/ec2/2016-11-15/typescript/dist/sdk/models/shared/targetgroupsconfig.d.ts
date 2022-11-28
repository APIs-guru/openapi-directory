import { SpeakeasyBase } from "../../../internal/utils";
import { TargetGroup } from "./targetgroup";
/**
 * Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these target groups.
**/
export declare class TargetGroupsConfig extends SpeakeasyBase {
    targetGroups?: TargetGroup[];
}
