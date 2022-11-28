import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceInstance } from "./deviceinstance";



export class UpdateDeviceInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceInstance" })
  deviceInstance?: DeviceInstance;
}
