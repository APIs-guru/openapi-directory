import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference.
**/
export declare class CapacityProviderStrategyItem extends SpeakeasyBase {
    base?: number;
    capacityProvider: string;
    weight?: number;
}
