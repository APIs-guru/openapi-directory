import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeActionEnum } from "./attributeactionenum";
import { AttributeValue } from "./attributevalue";
/**
 * Specifies the attribute to update and how to perform the update. Possible values: <code>PUT</code> (default), <code>ADD</code> or <code>DELETE</code>.
**/
export declare class AttributeValueUpdate extends SpeakeasyBase {
    action?: AttributeActionEnum;
    value?: AttributeValue;
}
