import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TelemetryStatusEnum } from "./telemetrystatusenum";



// VgwTelemetry
/** 
 * Describes telemetry for a VPN tunnel.
**/
export class VgwTelemetry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptedRouteCount?: number;

  @SpeakeasyMetadata()
  certificateArn?: string;

  @SpeakeasyMetadata()
  lastStatusChange?: Date;

  @SpeakeasyMetadata()
  outsideIpAddress?: string;

  @SpeakeasyMetadata()
  status?: TelemetryStatusEnum;

  @SpeakeasyMetadata()
  statusMessage?: string;
}
