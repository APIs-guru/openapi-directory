import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepositoryTrigger } from "./repositorytrigger";


// PutRepositoryTriggersInput
/** 
 * Represents the input of a put repository triggers operation.
**/
export class PutRepositoryTriggersInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=triggers", elemType: shared.RepositoryTrigger })
  triggers: RepositoryTrigger[];
}
