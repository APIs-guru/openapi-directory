import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointProperties } from "./endpointproperties";



export class ListEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointPropertiesList", elemType: EndpointProperties })
  endpointPropertiesList?: EndpointProperties[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
