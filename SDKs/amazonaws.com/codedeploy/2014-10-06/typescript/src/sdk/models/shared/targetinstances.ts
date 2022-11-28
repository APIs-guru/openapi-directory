import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2TagSet } from "./ec2tagset";
import { Ec2TagFilter } from "./ec2tagfilter";



// TargetInstances
/** 
 * Information about the instances to be used in the replacement environment in a blue/green deployment.
**/
export class TargetInstances extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoScalingGroups" })
  autoScalingGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=ec2TagSet" })
  ec2TagSet?: Ec2TagSet;

  @SpeakeasyMetadata({ data: "json, name=tagFilters", elemType: Ec2TagFilter })
  tagFilters?: Ec2TagFilter[];
}
