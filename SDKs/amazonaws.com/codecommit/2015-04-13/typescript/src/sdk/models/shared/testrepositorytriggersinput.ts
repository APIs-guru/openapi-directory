import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryTrigger } from "./repositorytrigger";



// TestRepositoryTriggersInput
/** 
 * Represents the input of a test repository triggers operation.
**/
export class TestRepositoryTriggersInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=triggers", elemType: RepositoryTrigger })
  triggers: RepositoryTrigger[];
}
