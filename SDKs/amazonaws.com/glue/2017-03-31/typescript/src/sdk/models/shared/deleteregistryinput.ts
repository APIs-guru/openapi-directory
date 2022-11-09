import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistryId } from "./registryid";


export class DeleteRegistryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegistryId" })
  registryId: RegistryId;
}
