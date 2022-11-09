import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchCreateIndexResponse
/** 
 * Represents the output of a <a>CreateIndex</a> response operation.
**/
export class BatchCreateIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
