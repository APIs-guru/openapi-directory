import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointProperties } from "./endpointproperties";


export class DescribeEndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointProperties" })
  endpointProperties?: EndpointProperties;
}
