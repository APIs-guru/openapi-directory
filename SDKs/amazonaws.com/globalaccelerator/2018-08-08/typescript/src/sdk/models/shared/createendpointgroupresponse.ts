import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointGroup } from "./endpointgroup";



export class CreateEndpointGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointGroup" })
  endpointGroup?: EndpointGroup;
}
