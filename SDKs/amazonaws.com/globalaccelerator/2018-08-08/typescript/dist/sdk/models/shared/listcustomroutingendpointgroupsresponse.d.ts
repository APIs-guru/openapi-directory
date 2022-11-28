import { SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingEndpointGroup } from "./customroutingendpointgroup";
export declare class ListCustomRoutingEndpointGroupsResponse extends SpeakeasyBase {
    endpointGroups?: CustomRoutingEndpointGroup[];
    nextToken?: string;
}
