import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchCreateObjectResponse
/** 
 * Represents the output of a <a>CreateObject</a> response operation.
**/
export class BatchCreateObjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
