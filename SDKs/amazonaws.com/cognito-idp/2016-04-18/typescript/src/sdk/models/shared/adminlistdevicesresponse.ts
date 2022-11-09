import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceType } from "./devicetype";


// AdminListDevicesResponse
/** 
 * Lists the device's response, as an administrator.
**/
export class AdminListDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Devices", elemType: shared.DeviceType })
  devices?: DeviceType[];

  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
