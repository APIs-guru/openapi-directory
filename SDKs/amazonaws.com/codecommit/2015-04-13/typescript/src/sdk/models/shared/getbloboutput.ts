import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetBlobOutput
/** 
 * Represents the output of a get blob operation.
**/
export class GetBlobOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;
}
