import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";



// UpdateAliasOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateAliasOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alias" })
  alias?: Alias;
}
