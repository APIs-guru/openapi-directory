import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectAttributeAction } from "./objectattributeaction";
import { AttributeKey } from "./attributekey";



// ObjectAttributeUpdate
/** 
 * Structure that contains attribute update information.
**/
export class ObjectAttributeUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectAttributeAction" })
  objectAttributeAction?: ObjectAttributeAction;

  @SpeakeasyMetadata({ data: "json, name=ObjectAttributeKey" })
  objectAttributeKey?: AttributeKey;
}
