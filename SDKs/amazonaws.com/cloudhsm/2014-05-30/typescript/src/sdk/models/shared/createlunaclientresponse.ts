import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateLunaClientResponse
/** 
 * Contains the output of the <a>CreateLunaClient</a> action.
**/
export class CreateLunaClientResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientArn" })
  clientArn?: string;
}
