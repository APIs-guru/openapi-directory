import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetRepositoryTriggersInput
/** 
 * Represents the input of a get repository triggers operation.
**/
export class GetRepositoryTriggersInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
