import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DevicePool } from "./devicepool";


// ListDevicePoolsResult
/** 
 * Represents the result of a list device pools request.
**/
export class ListDevicePoolsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePools", elemType: shared.DevicePool })
  devicePools?: DevicePool[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
