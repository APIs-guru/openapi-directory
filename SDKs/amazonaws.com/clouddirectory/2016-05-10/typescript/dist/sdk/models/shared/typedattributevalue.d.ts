import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.
**/
export declare class TypedAttributeValue extends SpeakeasyBase {
    binaryValue?: string;
    booleanValue?: boolean;
    datetimeValue?: Date;
    numberValue?: string;
    stringValue?: string;
}
