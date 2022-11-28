import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
import { TypedAttributeValue } from "./typedattributevalue";



// ObjectAttributeAction
/** 
 * The action to take on the object attribute.
**/
export class ObjectAttributeAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectAttributeActionType" })
  objectAttributeActionType?: UpdateActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ObjectAttributeUpdateValue" })
  objectAttributeUpdateValue?: TypedAttributeValue;
}
