import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectAttributeUpdate } from "./objectattributeupdate";
import { ObjectReference } from "./objectreference";



// BatchUpdateObjectAttributes
/** 
 * Represents the output of a <code>BatchUpdate</code> operation. 
**/
export class BatchUpdateObjectAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeUpdates", elemType: ObjectAttributeUpdate })
  attributeUpdates: ObjectAttributeUpdate[];

  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;
}
