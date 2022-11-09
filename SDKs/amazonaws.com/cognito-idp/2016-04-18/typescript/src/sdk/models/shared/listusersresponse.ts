import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserType } from "./usertype";


// ListUsersResponse
/** 
 * The response from the request to list users.
**/
export class ListUsersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @Metadata({ data: "json, name=Users", elemType: shared.UserType })
  users?: UserType[];
}
