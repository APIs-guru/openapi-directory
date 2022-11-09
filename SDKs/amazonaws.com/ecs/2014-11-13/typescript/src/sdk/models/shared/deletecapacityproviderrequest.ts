import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCapacityProviderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityProvider" })
  capacityProvider: string;
}
