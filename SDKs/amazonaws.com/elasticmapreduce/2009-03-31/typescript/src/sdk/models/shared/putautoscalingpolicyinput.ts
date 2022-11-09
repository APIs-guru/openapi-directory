import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingPolicy } from "./autoscalingpolicy";


export class PutAutoScalingPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingPolicy" })
  autoScalingPolicy: AutoScalingPolicy;

  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId: string;
}
