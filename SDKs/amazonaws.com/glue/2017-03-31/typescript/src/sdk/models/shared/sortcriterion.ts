import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortEnum } from "./sortenum";



// SortCriterion
/** 
 * Specifies a field to sort by and a sort order.
**/
export class SortCriterion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FieldName" })
  fieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=Sort" })
  sort?: SortEnum;
}
