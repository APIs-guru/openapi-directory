import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeActionEnum } from "./attributeactionenum";
import { AttributeValue } from "./attributevalue";



// AttributeValueUpdate
/** 
 * Specifies the attribute to update and how to perform the update. Possible values: <code>PUT</code> (default), <code>ADD</code> or <code>DELETE</code>.
**/
export class AttributeValueUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: AttributeActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: AttributeValue;
}
