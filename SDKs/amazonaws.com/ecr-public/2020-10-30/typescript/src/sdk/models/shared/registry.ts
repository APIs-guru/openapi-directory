import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegistryAlias } from "./registryalias";


// Registry
/** 
 * The details of a public registry.
**/
export class Registry extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliases", elemType: shared.RegistryAlias })
  aliases: RegistryAlias[];

  @Metadata({ data: "json, name=registryArn" })
  registryArn: string;

  @Metadata({ data: "json, name=registryId" })
  registryId: string;

  @Metadata({ data: "json, name=registryUri" })
  registryUri: string;

  @Metadata({ data: "json, name=verified" })
  verified: boolean;
}
