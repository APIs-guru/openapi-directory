import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTelemetryMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;
}
