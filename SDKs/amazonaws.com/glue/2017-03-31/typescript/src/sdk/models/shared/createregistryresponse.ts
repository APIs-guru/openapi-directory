import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateRegistryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=RegistryArn" })
  registryArn?: string;

  @Metadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
