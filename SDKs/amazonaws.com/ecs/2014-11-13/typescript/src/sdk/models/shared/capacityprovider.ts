import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoScalingGroupProvider } from "./autoscalinggroupprovider";
import { CapacityProviderStatusEnum } from "./capacityproviderstatusenum";
import { Tag } from "./tag";
import { CapacityProviderUpdateStatusEnum } from "./capacityproviderupdatestatusenum";


// CapacityProvider
/** 
 * The details of a capacity provider.
**/
export class CapacityProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoScalingGroupProvider" })
  autoScalingGroupProvider?: AutoScalingGroupProvider;

  @Metadata({ data: "json, name=capacityProviderArn" })
  capacityProviderArn?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: CapacityProviderStatusEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=updateStatus" })
  updateStatus?: CapacityProviderUpdateStatusEnum;

  @Metadata({ data: "json, name=updateStatusReason" })
  updateStatusReason?: string;
}
