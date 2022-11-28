import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";



// CreateAliasOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateAliasOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alias" })
  alias?: Alias;
}
