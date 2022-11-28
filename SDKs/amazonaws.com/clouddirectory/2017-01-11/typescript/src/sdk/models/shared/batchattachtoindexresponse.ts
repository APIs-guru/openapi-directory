import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchAttachToIndexResponse
/** 
 * Represents the output of a <a>AttachToIndex</a> response operation.
**/
export class BatchAttachToIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachedObjectIdentifier" })
  attachedObjectIdentifier?: string;
}
