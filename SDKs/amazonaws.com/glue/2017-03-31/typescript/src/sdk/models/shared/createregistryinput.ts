import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateRegistryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryName" })
  registryName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
