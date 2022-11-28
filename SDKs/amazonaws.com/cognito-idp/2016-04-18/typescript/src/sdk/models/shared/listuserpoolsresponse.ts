import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPoolDescriptionType } from "./userpooldescriptiontype";



// ListUserPoolsResponse
/** 
 * Represents the response to list user pools.
**/
export class ListUserPoolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPools", elemType: UserPoolDescriptionType })
  userPools?: UserPoolDescriptionType[];
}
