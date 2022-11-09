import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataflowEndpoint } from "./dataflowendpoint";
import { SecurityDetails } from "./securitydetails";
/**
 * Information about the endpoint details.
**/
export declare class EndpointDetails extends SpeakeasyBase {
    endpoint?: DataflowEndpoint;
    securityDetails?: SecurityDetails;
}
