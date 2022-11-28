import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointProperties } from "./endpointproperties";



export class DescribeEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointProperties" })
  endpointProperties?: EndpointProperties;
}
