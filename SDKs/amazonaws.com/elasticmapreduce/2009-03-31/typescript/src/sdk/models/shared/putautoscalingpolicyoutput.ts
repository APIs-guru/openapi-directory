import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyDescription } from "./autoscalingpolicydescription";



export class PutAutoScalingPolicyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingPolicy" })
  autoScalingPolicy?: AutoScalingPolicyDescription;

  @SpeakeasyMetadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId?: string;
}
