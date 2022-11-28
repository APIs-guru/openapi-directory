import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchCreateObjectResponse
/** 
 * Represents the output of a <a>CreateObject</a> response operation.
**/
export class BatchCreateObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
