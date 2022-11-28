import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroupProvider } from "./autoscalinggroupprovider";
import { Tag } from "./tag";
export declare class CreateCapacityProviderRequest extends SpeakeasyBase {
    autoScalingGroupProvider: AutoScalingGroupProvider;
    name: string;
    tags?: Tag[];
}
