import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Represents the information required for client programs to connect to the endpoint for a DAX cluster.
**/
export declare class Endpoint extends SpeakeasyBase {
    address?: string;
    port?: number;
    url?: string;
}
