import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveAutoScalingPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId: string;
}
