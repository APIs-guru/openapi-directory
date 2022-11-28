import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteRemoteAccessSessionRequest
/** 
 * Represents the request to delete the specified remote access session.
**/
export class DeleteRemoteAccessSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
