import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroupProvider } from "./autoscalinggroupprovider";
import { CapacityProviderStatusEnum } from "./capacityproviderstatusenum";
import { Tag } from "./tag";
import { CapacityProviderUpdateStatusEnum } from "./capacityproviderupdatestatusenum";
/**
 * The details of a capacity provider.
**/
export declare class CapacityProvider extends SpeakeasyBase {
    autoScalingGroupProvider?: AutoScalingGroupProvider;
    capacityProviderArn?: string;
    name?: string;
    status?: CapacityProviderStatusEnum;
    tags?: Tag[];
    updateStatus?: CapacityProviderUpdateStatusEnum;
    updateStatusReason?: string;
}
