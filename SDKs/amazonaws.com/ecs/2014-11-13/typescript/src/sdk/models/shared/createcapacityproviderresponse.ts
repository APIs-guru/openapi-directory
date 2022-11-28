import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityProvider } from "./capacityprovider";



export class CreateCapacityProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityProvider" })
  capacityProvider?: CapacityProvider;
}
