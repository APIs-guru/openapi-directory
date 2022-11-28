import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyValuesPair
/** 
 * A filter name and value pair that's used to return a more specific list of results from a <code>ListJobs</code> API operation.
**/
export class KeyValuesPair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
