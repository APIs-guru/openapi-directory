import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TelemetryMetadata } from "./telemetrymetadata";


export class GetTelemetryMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=telemetryMetadata", elemType: shared.TelemetryMetadata })
  telemetryMetadata: TelemetryMetadata[];
}
