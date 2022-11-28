import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeType } from "./attributetype";



// DeviceType
/** 
 * The device type.
**/
export class DeviceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceAttributes", elemType: AttributeType })
  deviceAttributes?: AttributeType[];

  @SpeakeasyMetadata({ data: "json, name=DeviceCreateDate" })
  deviceCreateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DeviceKey" })
  deviceKey?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceLastAuthenticatedDate" })
  deviceLastAuthenticatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DeviceLastModifiedDate" })
  deviceLastModifiedDate?: Date;
}
