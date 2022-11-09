import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceMethod } from "./devicemethod";


export class GetDeviceMethodsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceMethods", elemType: shared.DeviceMethod })
  deviceMethods?: DeviceMethod[];
}
