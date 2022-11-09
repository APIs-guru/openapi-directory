import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObjectAttributeUpdate } from "./objectattributeupdate";
import { ObjectReference } from "./objectreference";


// BatchUpdateObjectAttributes
/** 
 * Represents the output of a <code>BatchUpdate</code> operation. 
**/
export class BatchUpdateObjectAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeUpdates", elemType: shared.ObjectAttributeUpdate })
  attributeUpdates: ObjectAttributeUpdate[];

  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;
}
