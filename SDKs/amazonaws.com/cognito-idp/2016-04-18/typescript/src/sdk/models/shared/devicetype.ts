import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeType } from "./attributetype";


// DeviceType
/** 
 * The device type.
**/
export class DeviceType extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceAttributes", elemType: shared.AttributeType })
  deviceAttributes?: AttributeType[];

  @Metadata({ data: "json, name=DeviceCreateDate" })
  deviceCreateDate?: Date;

  @Metadata({ data: "json, name=DeviceKey" })
  deviceKey?: string;

  @Metadata({ data: "json, name=DeviceLastAuthenticatedDate" })
  deviceLastAuthenticatedDate?: Date;

  @Metadata({ data: "json, name=DeviceLastModifiedDate" })
  deviceLastModifiedDate?: Date;
}
