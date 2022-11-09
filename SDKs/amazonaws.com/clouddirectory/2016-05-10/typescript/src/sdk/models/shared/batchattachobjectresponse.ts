import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchAttachObjectResponse
/** 
 * Represents the output batch <a>AttachObject</a> response operation.
**/
export class BatchAttachObjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachedObjectIdentifier" })
  attachedObjectIdentifier?: string;
}
