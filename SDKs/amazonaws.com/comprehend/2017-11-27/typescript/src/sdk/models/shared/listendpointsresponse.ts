import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointProperties } from "./endpointproperties";


export class ListEndpointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointPropertiesList", elemType: shared.EndpointProperties })
  endpointPropertiesList?: EndpointProperties[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
