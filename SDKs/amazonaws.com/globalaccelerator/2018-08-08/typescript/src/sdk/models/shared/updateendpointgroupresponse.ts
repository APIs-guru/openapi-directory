import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointGroup } from "./endpointgroup";


export class UpdateEndpointGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointGroup" })
  endpointGroup?: EndpointGroup;
}
