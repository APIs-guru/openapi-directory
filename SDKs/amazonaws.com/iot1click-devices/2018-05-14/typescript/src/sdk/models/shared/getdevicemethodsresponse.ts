import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceMethod } from "./devicemethod";



export class GetDeviceMethodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceMethods", elemType: DeviceMethod })
  deviceMethods?: DeviceMethod[];
}
