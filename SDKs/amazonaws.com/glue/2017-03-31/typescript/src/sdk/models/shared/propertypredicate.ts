import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComparatorEnum } from "./comparatorenum";



// PropertyPredicate
/** 
 * Defines a property predicate.
**/
export class PropertyPredicate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Comparator" })
  comparator?: ComparatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
