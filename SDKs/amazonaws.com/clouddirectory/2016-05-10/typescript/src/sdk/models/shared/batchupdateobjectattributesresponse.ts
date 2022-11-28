import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchUpdateObjectAttributesResponse
/** 
 * Represents the output of a <code>BatchUpdate</code> response operation.
**/
export class BatchUpdateObjectAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
