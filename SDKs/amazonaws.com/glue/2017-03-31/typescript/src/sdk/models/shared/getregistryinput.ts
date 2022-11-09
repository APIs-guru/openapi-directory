import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistryId } from "./registryid";


export class GetRegistryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegistryId" })
  registryId: RegistryId;
}
