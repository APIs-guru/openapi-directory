import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistryId } from "./registryid";



export class DeleteRegistryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegistryId" })
  registryId: RegistryId;
}
