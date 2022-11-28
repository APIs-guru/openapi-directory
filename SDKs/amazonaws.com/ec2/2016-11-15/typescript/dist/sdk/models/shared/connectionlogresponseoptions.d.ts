import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the client connection logging options for a Client VPN endpoint.
**/
export declare class ConnectionLogResponseOptions extends SpeakeasyBase {
    cloudwatchLogGroup?: string;
    cloudwatchLogStream?: string;
    enabled?: boolean;
}
