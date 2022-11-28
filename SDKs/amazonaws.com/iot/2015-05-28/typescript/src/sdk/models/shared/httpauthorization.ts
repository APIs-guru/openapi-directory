import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SigV4Authorization } from "./sigv4authorization";



// HttpAuthorization
/** 
 * The authorization method used to send messages.
**/
export class HttpAuthorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sigv4" })
  sigv4?: SigV4Authorization;
}
