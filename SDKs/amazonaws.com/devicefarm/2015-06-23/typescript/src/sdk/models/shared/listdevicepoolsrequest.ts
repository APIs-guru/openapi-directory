import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DevicePoolTypeEnum } from "./devicepooltypeenum";



// ListDevicePoolsRequest
/** 
 * Represents the result of a list device pools request.
**/
export class ListDevicePoolsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DevicePoolTypeEnum;
}
