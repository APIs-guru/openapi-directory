import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceStatusEnum } from "./devicestatusenum";
import { DeviceTypeEnum } from "./devicetypeenum";



export class GetDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceArn" })
  deviceArn: string;

  @SpeakeasyMetadata({ data: "json, name=deviceCapabilities" })
  deviceCapabilities: string;

  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName: string;

  @SpeakeasyMetadata({ data: "json, name=deviceStatus" })
  deviceStatus: DeviceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=deviceType" })
  deviceType: DeviceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=providerName" })
  providerName: string;
}
