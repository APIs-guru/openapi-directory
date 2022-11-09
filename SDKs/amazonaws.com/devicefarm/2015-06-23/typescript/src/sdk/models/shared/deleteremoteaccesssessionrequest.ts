import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteRemoteAccessSessionRequest
/** 
 * Represents the request to delete the specified remote access session.
**/
export class DeleteRemoteAccessSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
