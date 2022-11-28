import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceDescription } from "./devicedescription";



export class DescribeDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceDescription" })
  deviceDescription?: DeviceDescription;
}
