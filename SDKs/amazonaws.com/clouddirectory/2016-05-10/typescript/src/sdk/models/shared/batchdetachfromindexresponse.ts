import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchDetachFromIndexResponse
/** 
 * Represents the output of a <a>DetachFromIndex</a> response operation.
**/
export class BatchDetachFromIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DetachedObjectIdentifier" })
  detachedObjectIdentifier?: string;
}
