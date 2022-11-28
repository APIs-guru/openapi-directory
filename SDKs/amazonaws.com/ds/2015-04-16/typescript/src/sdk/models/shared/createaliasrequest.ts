import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateAliasRequest
/** 
 * Contains the inputs for the <a>CreateAlias</a> operation.
**/
export class CreateAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
