import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";



// DescribeAliasOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeAliasOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alias" })
  alias?: Alias;
}
