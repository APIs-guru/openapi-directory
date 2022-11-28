import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCapacityProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityProvider" })
  capacityProvider: string;
}
