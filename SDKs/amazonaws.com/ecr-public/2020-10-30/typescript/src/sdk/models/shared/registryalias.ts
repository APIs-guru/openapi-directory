import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistryAliasStatusEnum } from "./registryaliasstatusenum";



// RegistryAlias
/** 
 * An object representing the aliases for a public registry. A public registry is given an alias upon creation but a custom alias can be set using the Amazon ECR console. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html">Registries</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
**/
export class RegistryAlias extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultRegistryAlias" })
  defaultRegistryAlias: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=primaryRegistryAlias" })
  primaryRegistryAlias: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: RegistryAliasStatusEnum;
}
