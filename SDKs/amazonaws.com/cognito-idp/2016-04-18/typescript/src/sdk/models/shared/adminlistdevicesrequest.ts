import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdminListDevicesRequest
/** 
 * Represents the request to list devices, as an administrator.
**/
export class AdminListDevicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
