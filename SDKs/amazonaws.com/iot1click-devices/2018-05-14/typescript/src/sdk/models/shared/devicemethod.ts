import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceType" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=MethodName" })
  methodName?: string;
}
