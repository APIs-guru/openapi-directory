import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CapacityProvider } from "./capacityprovider";


export class DeleteCapacityProviderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityProvider" })
  capacityProvider?: CapacityProvider;
}
