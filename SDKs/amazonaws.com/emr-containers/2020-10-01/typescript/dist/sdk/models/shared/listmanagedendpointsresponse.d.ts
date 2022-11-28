import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
export declare class ListManagedEndpointsResponse extends SpeakeasyBase {
    endpoints?: Endpoint[];
    nextToken?: string;
}
