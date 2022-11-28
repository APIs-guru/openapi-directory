import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRegistryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegistryArn" })
  registryArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryName" })
  registryName?: string;
}
