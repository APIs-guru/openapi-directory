import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDevEndpointRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;
}
