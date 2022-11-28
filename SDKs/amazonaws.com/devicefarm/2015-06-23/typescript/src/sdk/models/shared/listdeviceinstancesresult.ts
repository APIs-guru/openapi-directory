import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceInstance } from "./deviceinstance";



export class ListDeviceInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceInstances", elemType: DeviceInstance })
  deviceInstances?: DeviceInstance[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
