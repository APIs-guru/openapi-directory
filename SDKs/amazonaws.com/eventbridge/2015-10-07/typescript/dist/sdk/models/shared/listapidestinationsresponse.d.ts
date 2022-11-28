import { SpeakeasyBase } from "../../../internal/utils";
import { ApiDestination } from "./apidestination";
export declare class ListApiDestinationsResponse extends SpeakeasyBase {
    apiDestinations?: ApiDestination[];
    nextToken?: string;
}
