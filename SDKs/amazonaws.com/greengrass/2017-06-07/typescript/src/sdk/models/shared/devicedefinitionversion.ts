import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";



// DeviceDefinitionVersion
/** 
 * Information about a device definition version.
**/
export class DeviceDefinitionVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Devices", elemType: Device })
  devices?: Device[];
}
