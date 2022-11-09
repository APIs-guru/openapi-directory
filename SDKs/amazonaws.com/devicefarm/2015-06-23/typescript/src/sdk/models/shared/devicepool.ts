import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Rule } from "./rule";
import { DevicePoolTypeEnum } from "./devicepooltypeenum";


// DevicePool
/** 
 * Represents a collection of device types.
**/
export class DevicePool extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=maxDevices" })
  maxDevices?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.Rule })
  rules?: Rule[];

  @Metadata({ data: "json, name=type" })
  type?: DevicePoolTypeEnum;
}
