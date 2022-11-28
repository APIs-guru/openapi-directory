import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";



export class DeviceEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Device" })
  device?: Device;

  @SpeakeasyMetadata({ data: "json, name=StdEvent" })
  stdEvent?: string;
}
