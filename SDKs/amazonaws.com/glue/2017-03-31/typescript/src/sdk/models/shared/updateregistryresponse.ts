import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateRegistryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegistryArn" })
  registryArn?: string;

  @Metadata({ data: "json, name=RegistryName" })
  registryName?: string;
}
