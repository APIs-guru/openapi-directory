import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceInstance } from "./deviceinstance";


export class ListDeviceInstancesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceInstances", elemType: shared.DeviceInstance })
  deviceInstances?: DeviceInstance[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
