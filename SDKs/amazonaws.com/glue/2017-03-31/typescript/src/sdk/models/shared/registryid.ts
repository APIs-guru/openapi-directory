import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegistryId
/** 
 * A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).
**/
export class RegistryId extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegistryArn" })
  registryArn?: string;

  @Metadata({ data: "json, name=RegistryName" })
  registryName?: string;
}
