import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * Allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute value already exists; or if the attribute value exists and has a particular value before changing it.
**/
export declare class ExpectedAttributeValue extends SpeakeasyBase {
    exists?: boolean;
    value?: AttributeValue;
}
