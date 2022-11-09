import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
