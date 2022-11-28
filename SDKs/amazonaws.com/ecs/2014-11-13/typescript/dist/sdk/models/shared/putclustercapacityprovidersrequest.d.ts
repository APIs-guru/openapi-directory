import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
export declare class PutClusterCapacityProvidersRequest extends SpeakeasyBase {
    capacityProviders: string[];
    cluster: string;
    defaultCapacityProviderStrategy: CapacityProviderStrategyItem[];
}
