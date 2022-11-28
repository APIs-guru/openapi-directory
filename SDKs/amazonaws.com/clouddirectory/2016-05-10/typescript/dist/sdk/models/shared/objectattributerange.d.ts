import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeKey } from "./attributekey";
import { TypedAttributeValueRange } from "./typedattributevaluerange";
/**
 * A range of attributes.
**/
export declare class ObjectAttributeRange extends SpeakeasyBase {
    attributeKey?: AttributeKey;
    range?: TypedAttributeValueRange;
}
