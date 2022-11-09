import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetRemoteAccessSessionRequest
/** 
 * Represents the request to get information about the specified remote access session.
**/
export class GetRemoteAccessSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
