import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchAttachToIndexResponse
/** 
 * Represents the output of a <a>AttachToIndex</a> response operation.
**/
export class BatchAttachToIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachedObjectIdentifier" })
  attachedObjectIdentifier?: string;
}
