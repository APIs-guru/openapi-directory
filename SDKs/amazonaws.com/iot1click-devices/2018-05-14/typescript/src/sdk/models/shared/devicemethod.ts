import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeviceMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceType" })
  deviceType?: string;

  @Metadata({ data: "json, name=MethodName" })
  methodName?: string;
}
