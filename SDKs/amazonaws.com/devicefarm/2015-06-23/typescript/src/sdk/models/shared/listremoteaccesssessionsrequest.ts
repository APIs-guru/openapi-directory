import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListRemoteAccessSessionsRequest
/** 
 * Represents the request to return information about the remote access session.
**/
export class ListRemoteAccessSessionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
