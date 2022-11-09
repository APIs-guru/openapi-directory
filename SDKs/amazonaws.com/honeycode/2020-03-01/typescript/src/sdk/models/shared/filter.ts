import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Filter
/** 
 *  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate. 
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=contextRowId" })
  contextRowId?: string;

  @Metadata({ data: "json, name=formula" })
  formula: string;
}
