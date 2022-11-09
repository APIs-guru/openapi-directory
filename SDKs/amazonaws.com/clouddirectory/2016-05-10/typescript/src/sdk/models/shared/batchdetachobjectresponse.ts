import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchDetachObjectResponse
/** 
 * Represents the output of a <a>DetachObject</a> response operation.
**/
export class BatchDetachObjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=detachedObjectIdentifier" })
  detachedObjectIdentifier?: string;
}
