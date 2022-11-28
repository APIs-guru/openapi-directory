import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDevEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName: string;
}
