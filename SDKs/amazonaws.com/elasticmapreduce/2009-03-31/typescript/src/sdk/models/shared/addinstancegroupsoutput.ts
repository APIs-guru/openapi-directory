import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddInstanceGroupsOutput
/** 
 * Output from an AddInstanceGroups call.
**/
export class AddInstanceGroupsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceGroupIds" })
  instanceGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=JobFlowId" })
  jobFlowId?: string;
}
