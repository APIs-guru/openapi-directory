import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistryId } from "./registryid";


export class UpdateRegistryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=RegistryId" })
  registryId: RegistryId;
}
