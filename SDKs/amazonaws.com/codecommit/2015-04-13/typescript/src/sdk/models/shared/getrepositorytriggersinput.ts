import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetRepositoryTriggersInput
/** 
 * Represents the input of a get repository triggers operation.
**/
export class GetRepositoryTriggersInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
