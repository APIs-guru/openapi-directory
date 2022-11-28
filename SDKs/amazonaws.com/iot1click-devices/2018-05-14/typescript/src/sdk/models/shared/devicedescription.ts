import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RemainingLife" })
  remainingLife?: number;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
