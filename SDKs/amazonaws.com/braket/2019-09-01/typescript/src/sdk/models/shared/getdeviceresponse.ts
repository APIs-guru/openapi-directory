import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceStatusEnum } from "./devicestatusenum";
import { DeviceTypeEnum } from "./devicetypeenum";


export class GetDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceArn" })
  deviceArn: string;

  @Metadata({ data: "json, name=deviceCapabilities" })
  deviceCapabilities: string;

  @Metadata({ data: "json, name=deviceName" })
  deviceName: string;

  @Metadata({ data: "json, name=deviceStatus" })
  deviceStatus: DeviceStatusEnum;

  @Metadata({ data: "json, name=deviceType" })
  deviceType: DeviceTypeEnum;

  @Metadata({ data: "json, name=providerName" })
  providerName: string;
}
