import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetManagedScalingPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
