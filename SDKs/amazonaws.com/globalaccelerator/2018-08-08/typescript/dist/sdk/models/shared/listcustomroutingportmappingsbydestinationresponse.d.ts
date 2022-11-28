import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationPortMapping } from "./destinationportmapping";
export declare class ListCustomRoutingPortMappingsByDestinationResponse extends SpeakeasyBase {
    destinationPortMappings?: DestinationPortMapping[];
    nextToken?: string;
}
