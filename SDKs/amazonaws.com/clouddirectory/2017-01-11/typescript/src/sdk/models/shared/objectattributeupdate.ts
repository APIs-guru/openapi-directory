import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectAttributeAction } from "./objectattributeaction";
import { AttributeKey } from "./attributekey";


// ObjectAttributeUpdate
/** 
 * Structure that contains attribute update information.
**/
export class ObjectAttributeUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectAttributeAction" })
  objectAttributeAction?: ObjectAttributeAction;

  @Metadata({ data: "json, name=ObjectAttributeKey" })
  objectAttributeKey?: AttributeKey;
}
