import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NewDeviceMetadataType
/** 
 * The new device metadata type.
**/
export class NewDeviceMetadataType extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceGroupKey" })
  deviceGroupKey?: string;

  @Metadata({ data: "json, name=DeviceKey" })
  deviceKey?: string;
}
