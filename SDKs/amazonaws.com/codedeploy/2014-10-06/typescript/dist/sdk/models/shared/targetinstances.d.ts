import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2TagSet } from "./ec2tagset";
import { Ec2TagFilter } from "./ec2tagfilter";
/**
 * Information about the instances to be used in the replacement environment in a blue/green deployment.
**/
export declare class TargetInstances extends SpeakeasyBase {
    autoScalingGroups?: string[];
    ec2TagSet?: Ec2TagSet;
    tagFilters?: Ec2TagFilter[];
}
