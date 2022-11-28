import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Filter
/** 
 * A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
