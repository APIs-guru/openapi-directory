import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";



export class PutClusterCapacityProvidersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityProviders" })
  capacityProviders: string[];

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster: string;

  @SpeakeasyMetadata({ data: "json, name=defaultCapacityProviderStrategy", elemType: CapacityProviderStrategyItem })
  defaultCapacityProviderStrategy: CapacityProviderStrategyItem[];
}
