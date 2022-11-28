import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityProvider } from "./capacityprovider";



export class UpdateCapacityProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityProvider" })
  capacityProvider?: CapacityProvider;
}
