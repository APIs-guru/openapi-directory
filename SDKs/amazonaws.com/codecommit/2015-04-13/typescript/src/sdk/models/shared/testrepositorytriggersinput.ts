import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepositoryTrigger } from "./repositorytrigger";


// TestRepositoryTriggersInput
/** 
 * Represents the input of a test repository triggers operation.
**/
export class TestRepositoryTriggersInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=triggers", elemType: shared.RepositoryTrigger })
  triggers: RepositoryTrigger[];
}
