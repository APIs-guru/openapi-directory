import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingPolicyDescription } from "./autoscalingpolicydescription";


export class PutAutoScalingPolicyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingPolicy" })
  autoScalingPolicy?: AutoScalingPolicyDescription;

  @Metadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @Metadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId?: string;
}
