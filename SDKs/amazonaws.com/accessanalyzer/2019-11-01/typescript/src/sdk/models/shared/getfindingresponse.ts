import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Finding } from "./finding";


// GetFindingResponse
/** 
 * The response to the request.
**/
export class GetFindingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=finding" })
  finding?: Finding;
}
