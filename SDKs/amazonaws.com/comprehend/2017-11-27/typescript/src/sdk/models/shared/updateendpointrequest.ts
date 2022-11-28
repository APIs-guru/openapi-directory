import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DesiredInferenceUnits" })
  desiredInferenceUnits: number;

  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;
}
