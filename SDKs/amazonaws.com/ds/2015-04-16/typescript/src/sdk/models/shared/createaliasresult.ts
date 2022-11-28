import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateAliasResult
/** 
 * Contains the results of the <a>CreateAlias</a> operation.
**/
export class CreateAliasResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;
}
