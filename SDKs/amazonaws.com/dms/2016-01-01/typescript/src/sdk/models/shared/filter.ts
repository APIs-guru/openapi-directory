import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Filter
/** 
 * Identifies the name and value of a filter object. This filter is used to limit the number and type of DMS objects that are returned for a particular <code>Describe*</code> call or similar operation. Filters are used as an optional parameter for certain API operations. 
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
