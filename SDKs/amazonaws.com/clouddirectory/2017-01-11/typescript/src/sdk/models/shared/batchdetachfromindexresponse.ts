import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchDetachFromIndexResponse
/** 
 * Represents the output of a <a>DetachFromIndex</a> response operation.
**/
export class BatchDetachFromIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DetachedObjectIdentifier" })
  detachedObjectIdentifier?: string;
}
