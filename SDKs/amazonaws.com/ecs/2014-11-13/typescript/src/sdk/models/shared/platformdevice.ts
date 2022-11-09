import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlatformDeviceTypeEnum } from "./platformdevicetypeenum";


// PlatformDevice
/** 
 * The devices that are available on the container instance. The only supported device type is a GPU.
**/
export class PlatformDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: PlatformDeviceTypeEnum;
}
