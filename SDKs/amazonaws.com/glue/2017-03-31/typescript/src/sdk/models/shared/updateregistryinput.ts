import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistryId } from "./registryid";



export class UpdateRegistryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryId" })
  registryId: RegistryId;
}
