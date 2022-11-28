import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListRemoteAccessSessionsRequest
/** 
 * Represents the request to return information about the remote access session.
**/
export class ListRemoteAccessSessionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
