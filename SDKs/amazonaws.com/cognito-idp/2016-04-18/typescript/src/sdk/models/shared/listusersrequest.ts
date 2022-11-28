import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListUsersRequest
/** 
 * Represents the request to list users.
**/
export class ListUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributesToGet" })
  attributesToGet?: string[];

  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
