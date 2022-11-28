import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroupProviderUpdate } from "./autoscalinggroupproviderupdate";



export class UpdateCapacityProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoScalingGroupProvider" })
  autoScalingGroupProvider: AutoScalingGroupProviderUpdate;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
