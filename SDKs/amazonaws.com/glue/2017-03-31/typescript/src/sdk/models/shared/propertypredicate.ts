import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComparatorEnum } from "./comparatorenum";


// PropertyPredicate
/** 
 * Defines a property predicate.
**/
export class PropertyPredicate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Comparator" })
  comparator?: ComparatorEnum;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
