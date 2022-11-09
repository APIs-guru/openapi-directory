import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateAliasResult
/** 
 * Contains the results of the <a>CreateAlias</a> operation.
**/
export class CreateAliasResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alias" })
  alias?: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;
}
