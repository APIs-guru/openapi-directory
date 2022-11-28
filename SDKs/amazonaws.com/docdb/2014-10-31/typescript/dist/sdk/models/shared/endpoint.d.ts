import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Network information for accessing a cluster or instance. Client programs must specify a valid endpoint to access these Amazon DocumentDB resources.
**/
export declare class Endpoint extends SpeakeasyBase {
    address?: string;
    hostedZoneId?: string;
    port?: number;
}
