import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistryAlias } from "./registryalias";



// Registry
/** 
 * The details of a public registry.
**/
export class Registry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliases", elemType: RegistryAlias })
  aliases: RegistryAlias[];

  @SpeakeasyMetadata({ data: "json, name=registryArn" })
  registryArn: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId: string;

  @SpeakeasyMetadata({ data: "json, name=registryUri" })
  registryUri: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified: boolean;
}
