import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveAutoScalingPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId: string;
}
