import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Device } from "./device";


// DeviceDefinitionVersion
/** 
 * Information about a device definition version.
**/
export class DeviceDefinitionVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Devices", elemType: shared.Device })
  devices?: Device[];
}
