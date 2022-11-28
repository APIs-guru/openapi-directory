import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchAttachObjectResponse
/** 
 * Represents the output batch <a>AttachObject</a> response operation.
**/
export class BatchAttachObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachedObjectIdentifier" })
  attachedObjectIdentifier?: string;
}
