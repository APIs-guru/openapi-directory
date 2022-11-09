import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListDevicesRequest
/** 
 * Represents the request to list the devices.
**/
export class ListDevicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
