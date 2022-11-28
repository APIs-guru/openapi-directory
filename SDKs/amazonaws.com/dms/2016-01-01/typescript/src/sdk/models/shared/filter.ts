import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Filter
/** 
 * Identifies the name and value of a filter object. This filter is used to limit the number and type of DMS objects that are returned for a particular <code>Describe*</code> call or similar operation. Filters are used as an optional parameter for certain API operations. 
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
