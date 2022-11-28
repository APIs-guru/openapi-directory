import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListUserPoolClientsRequest
/** 
 * Represents the request to list the user pool clients.
**/
export class ListUserPoolClientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
