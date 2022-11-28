import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDevEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName: string;
}
