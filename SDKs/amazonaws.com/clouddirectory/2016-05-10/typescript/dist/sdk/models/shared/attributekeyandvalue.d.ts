import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeKey } from "./attributekey";
import { TypedAttributeValue } from "./typedattributevalue";
/**
 * The combination of an attribute key and an attribute value.
**/
export declare class AttributeKeyAndValue extends SpeakeasyBase {
    key: AttributeKey;
    value: TypedAttributeValue;
}
