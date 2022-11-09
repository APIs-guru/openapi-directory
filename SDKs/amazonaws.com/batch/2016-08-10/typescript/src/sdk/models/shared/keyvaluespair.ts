import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyValuesPair
/** 
 * A filter name and value pair that's used to return a more specific list of results from a <code>ListJobs</code> API operation.
**/
export class KeyValuesPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
