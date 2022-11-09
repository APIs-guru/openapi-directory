import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
import { TypedAttributeValue } from "./typedattributevalue";


// LinkAttributeAction
/** 
 * The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.
**/
export class LinkAttributeAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeActionType" })
  attributeActionType?: UpdateActionTypeEnum;

  @Metadata({ data: "json, name=AttributeUpdateValue" })
  attributeUpdateValue?: TypedAttributeValue;
}
