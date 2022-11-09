import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetBlobOutput
/** 
 * Represents the output of a get blob operation.
**/
export class GetBlobOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: string;
}
