import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Ec2TagSet } from "./ec2tagset";
import { Ec2TagFilter } from "./ec2tagfilter";


// TargetInstances
/** 
 * Information about the instances to be used in the replacement environment in a blue/green deployment.
**/
export class TargetInstances extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoScalingGroups" })
  autoScalingGroups?: string[];

  @Metadata({ data: "json, name=ec2TagSet" })
  ec2TagSet?: Ec2TagSet;

  @Metadata({ data: "json, name=tagFilters", elemType: shared.Ec2TagFilter })
  tagFilters?: Ec2TagFilter[];
}
