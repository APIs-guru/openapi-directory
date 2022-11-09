import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectReference } from "./objectreference";


// BatchDetachObject
/** 
 * Represents the output of a <a>DetachObject</a> operation.
**/
export class BatchDetachObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchReferenceName" })
  batchReferenceName?: string;

  @Metadata({ data: "json, name=LinkName" })
  linkName: string;

  @Metadata({ data: "json, name=ParentReference" })
  parentReference: ObjectReference;
}
