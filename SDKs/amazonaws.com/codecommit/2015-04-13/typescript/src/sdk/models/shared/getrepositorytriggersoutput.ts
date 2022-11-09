import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepositoryTrigger } from "./repositorytrigger";


// GetRepositoryTriggersOutput
/** 
 * Represents the output of a get repository triggers operation.
**/
export class GetRepositoryTriggersOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationId" })
  configurationId?: string;

  @Metadata({ data: "json, name=triggers", elemType: shared.RepositoryTrigger })
  triggers?: RepositoryTrigger[];
}
