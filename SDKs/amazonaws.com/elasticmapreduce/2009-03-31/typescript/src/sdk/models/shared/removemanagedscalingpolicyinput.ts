import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveManagedScalingPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
