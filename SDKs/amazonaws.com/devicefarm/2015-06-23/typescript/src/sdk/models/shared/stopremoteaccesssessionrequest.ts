import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopRemoteAccessSessionRequest
/** 
 * Represents the request to stop the remote access session.
**/
export class StopRemoteAccessSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
