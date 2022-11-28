import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceInstance } from "./deviceinstance";



export class GetDeviceInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceInstance" })
  deviceInstance?: DeviceInstance;
}
