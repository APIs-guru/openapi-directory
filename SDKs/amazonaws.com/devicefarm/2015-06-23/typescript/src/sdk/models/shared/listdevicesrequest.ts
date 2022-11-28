import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceFilter } from "./devicefilter";



// ListDevicesRequest
/** 
 * Represents the result of a list devices request.
**/
export class ListDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: DeviceFilter })
  filters?: DeviceFilter[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
