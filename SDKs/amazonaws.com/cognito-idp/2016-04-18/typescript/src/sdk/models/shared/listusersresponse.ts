import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserType } from "./usertype";



// ListUsersResponse
/** 
 * The response from the request to list users.
**/
export class ListUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Users", elemType: UserType })
  users?: UserType[];
}
