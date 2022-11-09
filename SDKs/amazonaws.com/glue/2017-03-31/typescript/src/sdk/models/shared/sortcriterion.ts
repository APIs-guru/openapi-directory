import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortEnum } from "./sortenum";


// SortCriterion
/** 
 * Specifies a field to sort by and a sort order.
**/
export class SortCriterion extends SpeakeasyBase {
  @Metadata({ data: "json, name=FieldName" })
  fieldName?: string;

  @Metadata({ data: "json, name=Sort" })
  sort?: SortEnum;
}
