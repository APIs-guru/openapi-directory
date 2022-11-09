import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddInstanceGroupsOutput
/** 
 * Output from an AddInstanceGroups call.
**/
export class AddInstanceGroupsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @Metadata({ data: "json, name=InstanceGroupIds" })
  instanceGroupIds?: string[];

  @Metadata({ data: "json, name=JobFlowId" })
  jobFlowId?: string;
}
