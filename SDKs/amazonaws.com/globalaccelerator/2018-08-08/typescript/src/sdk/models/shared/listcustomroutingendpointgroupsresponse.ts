import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingEndpointGroup } from "./customroutingendpointgroup";



export class ListCustomRoutingEndpointGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointGroups", elemType: CustomRoutingEndpointGroup })
  endpointGroups?: CustomRoutingEndpointGroup[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
