import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn?: string;
}
