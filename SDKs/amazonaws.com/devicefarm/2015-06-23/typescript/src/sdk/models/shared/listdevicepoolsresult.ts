import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DevicePool } from "./devicepool";



// ListDevicePoolsResult
/** 
 * Represents the result of a list device pools request.
**/
export class ListDevicePoolsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePools", elemType: DevicePool })
  devicePools?: DevicePool[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
