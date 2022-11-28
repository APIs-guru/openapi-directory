import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointGroup } from "./endpointgroup";
export declare class ListEndpointGroupsResponse extends SpeakeasyBase {
    endpointGroups?: EndpointGroup[];
    nextToken?: string;
}
