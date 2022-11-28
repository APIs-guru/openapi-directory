import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchDetachObjectResponse
/** 
 * Represents the output of a <a>DetachObject</a> response operation.
**/
export class BatchDetachObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detachedObjectIdentifier" })
  detachedObjectIdentifier?: string;
}
