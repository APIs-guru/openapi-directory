import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserPoolDescriptionType } from "./userpooldescriptiontype";


// ListUserPoolsResponse
/** 
 * Represents the response to list user pools.
**/
export class ListUserPoolsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=UserPools", elemType: shared.UserPoolDescriptionType })
  userPools?: UserPoolDescriptionType[];
}
