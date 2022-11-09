import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CapacityProvider } from "./capacityprovider";


export class CreateCapacityProviderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityProvider" })
  capacityProvider?: CapacityProvider;
}
