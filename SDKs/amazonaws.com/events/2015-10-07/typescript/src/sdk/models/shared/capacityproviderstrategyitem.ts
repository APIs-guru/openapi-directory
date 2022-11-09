import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CapacityProviderStrategyItem
/** 
 * The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference.
**/
export class CapacityProviderStrategyItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=base" })
  base?: number;

  @Metadata({ data: "json, name=capacityProvider" })
  capacityProvider: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
