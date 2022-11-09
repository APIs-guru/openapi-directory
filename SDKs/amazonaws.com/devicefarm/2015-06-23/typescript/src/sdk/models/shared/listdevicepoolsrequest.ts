import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DevicePoolTypeEnum } from "./devicepooltypeenum";


// ListDevicePoolsRequest
/** 
 * Represents the result of a list device pools request.
**/
export class ListDevicePoolsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=type" })
  type?: DevicePoolTypeEnum;
}
