import { SpeakeasyBase } from "../../../internal/utils";
import { ComparatorEnum } from "./comparatorenum";
/**
 * Defines a property predicate.
**/
export declare class PropertyPredicate extends SpeakeasyBase {
    comparator?: ComparatorEnum;
    key?: string;
    value?: string;
}
