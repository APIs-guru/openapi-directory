import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceType } from "./devicetype";



// AdminListDevicesResponse
/** 
 * Lists the device's response, as an administrator.
**/
export class AdminListDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Devices", elemType: DeviceType })
  devices?: DeviceType[];

  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
