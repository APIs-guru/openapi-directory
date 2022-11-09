import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopRemoteAccessSessionRequest
/** 
 * Represents the request to stop the remote access session.
**/
export class StopRemoteAccessSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
