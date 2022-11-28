import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistryId } from "./registryid";



export class GetRegistryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegistryId" })
  registryId: RegistryId;
}
