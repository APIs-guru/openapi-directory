import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Filter
/** 
 *  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate. 
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextRowId" })
  contextRowId?: string;

  @SpeakeasyMetadata({ data: "json, name=formula" })
  formula: string;
}
