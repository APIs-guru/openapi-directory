import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeActionEnum } from "./attributeactionenum";
import { AttributeValue } from "./attributevalue";
/**
 * <p>For the <code>UpdateItem</code> operation, represents the attributes to be modified, the action to perform on each, and the new value for each.</p> <note> <p>You cannot use <code>UpdateItem</code> to update any primary key attributes. Instead, you will need to delete the item, and then use <code>PutItem</code> to create a new item with new attributes.</p> </note> <p>Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p>
**/
export declare class AttributeValueUpdate extends SpeakeasyBase {
    action?: AttributeActionEnum;
    value?: AttributeValue;
}
