import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NewDeviceMetadataType
/** 
 * The new device metadata type.
**/
export class NewDeviceMetadataType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceGroupKey" })
  deviceGroupKey?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceKey" })
  deviceKey?: string;
}
