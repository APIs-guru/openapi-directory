import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchUpdateObjectAttributesResponse
/** 
 * Represents the output of a <code>BatchUpdate</code> response operation.
**/
export class BatchUpdateObjectAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
