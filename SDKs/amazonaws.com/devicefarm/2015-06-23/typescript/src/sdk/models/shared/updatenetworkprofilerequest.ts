import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkProfileTypeEnum } from "./networkprofiletypeenum";


export class UpdateNetworkProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=downlinkBandwidthBits" })
  downlinkBandwidthBits?: number;

  @Metadata({ data: "json, name=downlinkDelayMs" })
  downlinkDelayMs?: number;

  @Metadata({ data: "json, name=downlinkJitterMs" })
  downlinkJitterMs?: number;

  @Metadata({ data: "json, name=downlinkLossPercent" })
  downlinkLossPercent?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: NetworkProfileTypeEnum;

  @Metadata({ data: "json, name=uplinkBandwidthBits" })
  uplinkBandwidthBits?: number;

  @Metadata({ data: "json, name=uplinkDelayMs" })
  uplinkDelayMs?: number;

  @Metadata({ data: "json, name=uplinkJitterMs" })
  uplinkJitterMs?: number;

  @Metadata({ data: "json, name=uplinkLossPercent" })
  uplinkLossPercent?: number;
}
