import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateAliasRequest
/** 
 * Contains the inputs for the <a>CreateAlias</a> operation.
**/
export class CreateAliasRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alias" })
  alias: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
