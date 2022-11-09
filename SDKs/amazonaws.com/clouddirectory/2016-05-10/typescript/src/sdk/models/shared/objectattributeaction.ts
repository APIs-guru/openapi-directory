import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
import { TypedAttributeValue } from "./typedattributevalue";


// ObjectAttributeAction
/** 
 * The action to take on the object attribute.
**/
export class ObjectAttributeAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectAttributeActionType" })
  objectAttributeActionType?: UpdateActionTypeEnum;

  @Metadata({ data: "json, name=ObjectAttributeUpdateValue" })
  objectAttributeUpdateValue?: TypedAttributeValue;
}
