import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;
}
