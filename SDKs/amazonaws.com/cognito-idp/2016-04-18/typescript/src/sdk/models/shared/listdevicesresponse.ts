import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceType } from "./devicetype";


// ListDevicesResponse
/** 
 * Represents the response to list devices.
**/
export class ListDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Devices", elemType: shared.DeviceType })
  devices?: DeviceType[];

  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
