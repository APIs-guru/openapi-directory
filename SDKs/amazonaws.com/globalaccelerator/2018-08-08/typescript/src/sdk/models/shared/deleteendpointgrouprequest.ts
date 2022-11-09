import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteEndpointGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;
}
