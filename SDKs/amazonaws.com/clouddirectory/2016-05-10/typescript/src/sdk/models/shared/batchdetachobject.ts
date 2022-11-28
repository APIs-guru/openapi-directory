import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";



// BatchDetachObject
/** 
 * Represents the output of a <a>DetachObject</a> operation.
**/
export class BatchDetachObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchReferenceName" })
  batchReferenceName?: string;

  @SpeakeasyMetadata({ data: "json, name=LinkName" })
  linkName: string;

  @SpeakeasyMetadata({ data: "json, name=ParentReference" })
  parentReference: ObjectReference;
}
