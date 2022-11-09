import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceDescription } from "./devicedescription";


export class DescribeDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceDescription" })
  deviceDescription?: DeviceDescription;
}
