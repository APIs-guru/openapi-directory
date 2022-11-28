import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroupProvider } from "./autoscalinggroupprovider";
import { Tag } from "./tag";



export class CreateCapacityProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoScalingGroupProvider" })
  autoScalingGroupProvider: AutoScalingGroupProvider;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
