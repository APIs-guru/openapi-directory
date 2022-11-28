import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvokeDeviceMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceMethodResponse" })
  deviceMethodResponse?: string;
}
