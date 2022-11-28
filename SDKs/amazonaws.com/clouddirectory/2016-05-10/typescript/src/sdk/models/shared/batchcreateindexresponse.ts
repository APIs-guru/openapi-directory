import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchCreateIndexResponse
/** 
 * Represents the output of a <a>CreateIndex</a> response operation.
**/
export class BatchCreateIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
