import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Device } from "./device";


export class DeviceEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Device" })
  device?: Device;

  @Metadata({ data: "json, name=StdEvent" })
  stdEvent?: string;
}
