import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkProfileTypeEnum } from "./networkprofiletypeenum";



export class UpdateNetworkProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=downlinkBandwidthBits" })
  downlinkBandwidthBits?: number;

  @SpeakeasyMetadata({ data: "json, name=downlinkDelayMs" })
  downlinkDelayMs?: number;

  @SpeakeasyMetadata({ data: "json, name=downlinkJitterMs" })
  downlinkJitterMs?: number;

  @SpeakeasyMetadata({ data: "json, name=downlinkLossPercent" })
  downlinkLossPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: NetworkProfileTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uplinkBandwidthBits" })
  uplinkBandwidthBits?: number;

  @SpeakeasyMetadata({ data: "json, name=uplinkDelayMs" })
  uplinkDelayMs?: number;

  @SpeakeasyMetadata({ data: "json, name=uplinkJitterMs" })
  uplinkJitterMs?: number;

  @SpeakeasyMetadata({ data: "json, name=uplinkLossPercent" })
  uplinkLossPercent?: number;
}
