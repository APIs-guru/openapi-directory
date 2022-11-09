import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";


export class PutClusterCapacityProvidersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityProviders" })
  capacityProviders: string[];

  @Metadata({ data: "json, name=cluster" })
  cluster: string;

  @Metadata({ data: "json, name=defaultCapacityProviderStrategy", elemType: shared.CapacityProviderStrategyItem })
  defaultCapacityProviderStrategy: CapacityProviderStrategyItem[];
}
