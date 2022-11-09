import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDevEndpointRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;
}
