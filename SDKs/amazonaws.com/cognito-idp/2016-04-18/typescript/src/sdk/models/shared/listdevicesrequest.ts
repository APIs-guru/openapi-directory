import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListDevicesRequest
/** 
 * Represents the request to list the devices.
**/
export class ListDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
