import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TelemetryMetadata } from "./telemetrymetadata";



export class GetTelemetryMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=telemetryMetadata", elemType: TelemetryMetadata })
  telemetryMetadata: TelemetryMetadata[];
}
