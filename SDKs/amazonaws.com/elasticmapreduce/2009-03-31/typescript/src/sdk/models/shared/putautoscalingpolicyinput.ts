import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicy } from "./autoscalingpolicy";



export class PutAutoScalingPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingPolicy" })
  autoScalingPolicy: AutoScalingPolicy;

  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId: string;
}
