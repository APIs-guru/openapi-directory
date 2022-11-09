import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceFilter } from "./devicefilter";


// ListDevicesRequest
/** 
 * Represents the result of a list devices request.
**/
export class ListDevicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=filters", elemType: shared.DeviceFilter })
  filters?: DeviceFilter[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
