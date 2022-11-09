import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomRoutingEndpointGroup } from "./customroutingendpointgroup";


export class ListCustomRoutingEndpointGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointGroups", elemType: shared.CustomRoutingEndpointGroup })
  endpointGroups?: CustomRoutingEndpointGroup[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
