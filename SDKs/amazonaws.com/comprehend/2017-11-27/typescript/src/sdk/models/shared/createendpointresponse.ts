import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn?: string;
}
