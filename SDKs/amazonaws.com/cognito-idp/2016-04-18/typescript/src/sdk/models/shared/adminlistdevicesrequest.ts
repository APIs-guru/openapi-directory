import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdminListDevicesRequest
/** 
 * Represents the request to list devices, as an administrator.
**/
export class AdminListDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
