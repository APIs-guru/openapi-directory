import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegistryId
/** 
 * A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).
**/
export class RegistryId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegistryArn" })
  registryArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryName" })
  registryName?: string;
}
