import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetRemoteAccessSessionRequest
/** 
 * Represents the request to get information about the specified remote access session.
**/
export class GetRemoteAccessSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
