import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTelemetryMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;
}
