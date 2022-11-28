import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointGroup } from "./endpointgroup";



export class DescribeEndpointGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointGroup" })
  endpointGroup?: EndpointGroup;
}
