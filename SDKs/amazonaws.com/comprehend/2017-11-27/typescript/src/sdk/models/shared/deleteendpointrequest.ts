import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteEndpointRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;
}
