import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
import { TypedAttributeValue } from "./typedattributevalue";
/**
 * The action to take on the object attribute.
**/
export declare class ObjectAttributeAction extends SpeakeasyBase {
    objectAttributeActionType?: UpdateActionTypeEnum;
    objectAttributeUpdateValue?: TypedAttributeValue;
}
