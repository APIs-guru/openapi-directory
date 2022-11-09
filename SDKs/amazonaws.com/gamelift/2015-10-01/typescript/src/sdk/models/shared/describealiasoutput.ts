import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Alias } from "./alias";


// DescribeAliasOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeAliasOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alias" })
  alias?: Alias;
}
