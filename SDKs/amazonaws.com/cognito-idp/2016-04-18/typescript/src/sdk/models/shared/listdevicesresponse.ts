import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceType } from "./devicetype";



// ListDevicesResponse
/** 
 * Represents the response to list devices.
**/
export class ListDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Devices", elemType: DeviceType })
  devices?: DeviceType[];

  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
