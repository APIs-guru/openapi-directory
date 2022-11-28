import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
import { TypedAttributeValue } from "./typedattributevalue";



// LinkAttributeAction
/** 
 * The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.
**/
export class LinkAttributeAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeActionType" })
  attributeActionType?: UpdateActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=AttributeUpdateValue" })
  attributeUpdateValue?: TypedAttributeValue;
}
