import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
import { DevicePoolTypeEnum } from "./devicepooltypeenum";



// DevicePool
/** 
 * Represents a collection of device types.
**/
export class DevicePool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=maxDevices" })
  maxDevices?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: Rule })
  rules?: Rule[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DevicePoolTypeEnum;
}
