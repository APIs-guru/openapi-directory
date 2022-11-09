import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomRoutingEndpointDescription } from "./customroutingendpointdescription";


export class AddCustomRoutingEndpointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointDescriptions", elemType: shared.CustomRoutingEndpointDescription })
  endpointDescriptions?: CustomRoutingEndpointDescription[];

  @Metadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn?: string;
}
