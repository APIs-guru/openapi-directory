import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryTrigger } from "./repositorytrigger";



// PutRepositoryTriggersInput
/** 
 * Represents the input of a put repository triggers operation.
**/
export class PutRepositoryTriggersInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=triggers", elemType: RepositoryTrigger })
  triggers: RepositoryTrigger[];
}
