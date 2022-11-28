import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroupProvider } from "./autoscalinggroupprovider";
import { CapacityProviderStatusEnum } from "./capacityproviderstatusenum";
import { Tag } from "./tag";
import { CapacityProviderUpdateStatusEnum } from "./capacityproviderupdatestatusenum";



// CapacityProvider
/** 
 * The details of a capacity provider.
**/
export class CapacityProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoScalingGroupProvider" })
  autoScalingGroupProvider?: AutoScalingGroupProvider;

  @SpeakeasyMetadata({ data: "json, name=capacityProviderArn" })
  capacityProviderArn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CapacityProviderStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=updateStatus" })
  updateStatus?: CapacityProviderUpdateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updateStatusReason" })
  updateStatusReason?: string;
}
