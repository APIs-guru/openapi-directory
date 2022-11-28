import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryTrigger } from "./repositorytrigger";



// GetRepositoryTriggersOutput
/** 
 * Represents the output of a get repository triggers operation.
**/
export class GetRepositoryTriggersOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationId" })
  configurationId?: string;

  @SpeakeasyMetadata({ data: "json, name=triggers", elemType: RepositoryTrigger })
  triggers?: RepositoryTrigger[];
}
