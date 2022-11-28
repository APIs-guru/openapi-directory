import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateLunaClientResponse
/** 
 * Contains the output of the <a>CreateLunaClient</a> action.
**/
export class CreateLunaClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientArn" })
  clientArn?: string;
}
