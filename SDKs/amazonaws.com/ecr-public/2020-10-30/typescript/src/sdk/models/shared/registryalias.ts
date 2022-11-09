import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistryAliasStatusEnum } from "./registryaliasstatusenum";


// RegistryAlias
/** 
 * An object representing the aliases for a public registry. A public registry is given an alias upon creation but a custom alias can be set using the Amazon ECR console. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html">Registries</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
**/
export class RegistryAlias extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultRegistryAlias" })
  defaultRegistryAlias: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=primaryRegistryAlias" })
  primaryRegistryAlias: boolean;

  @Metadata({ data: "json, name=status" })
  status: RegistryAliasStatusEnum;
}
