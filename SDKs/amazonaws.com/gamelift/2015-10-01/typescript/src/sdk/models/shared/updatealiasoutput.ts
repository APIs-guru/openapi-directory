import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Alias } from "./alias";


// UpdateAliasOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateAliasOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alias" })
  alias?: Alias;
}
