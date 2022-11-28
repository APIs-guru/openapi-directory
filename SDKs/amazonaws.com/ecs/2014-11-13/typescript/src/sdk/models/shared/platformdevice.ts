import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformDeviceTypeEnum } from "./platformdevicetypeenum";



// PlatformDevice
/** 
 * The devices that are available on the container instance. The only supported device type is a GPU.
**/
export class PlatformDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PlatformDeviceTypeEnum;
}
