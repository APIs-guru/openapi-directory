import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceInstance } from "./deviceinstance";


export class UpdateDeviceInstanceResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceInstance" })
  deviceInstance?: DeviceInstance;
}
