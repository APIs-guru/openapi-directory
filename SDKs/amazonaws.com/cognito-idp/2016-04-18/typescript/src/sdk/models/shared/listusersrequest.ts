import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListUsersRequest
/** 
 * Represents the request to list users.
**/
export class ListUsersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributesToGet" })
  attributesToGet?: string[];

  @Metadata({ data: "json, name=Filter" })
  filter?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
