import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
