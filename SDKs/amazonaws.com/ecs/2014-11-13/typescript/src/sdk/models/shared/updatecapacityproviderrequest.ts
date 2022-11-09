import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingGroupProviderUpdate } from "./autoscalinggroupproviderupdate";


export class UpdateCapacityProviderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoScalingGroupProvider" })
  autoScalingGroupProvider: AutoScalingGroupProviderUpdate;

  @Metadata({ data: "json, name=name" })
  name: string;
}
