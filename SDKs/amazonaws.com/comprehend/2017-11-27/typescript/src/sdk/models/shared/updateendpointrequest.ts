import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateEndpointRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DesiredInferenceUnits" })
  desiredInferenceUnits: number;

  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;
}
