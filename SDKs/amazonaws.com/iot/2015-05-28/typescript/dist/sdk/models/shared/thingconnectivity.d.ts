import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The connectivity status of the thing.
**/
export declare class ThingConnectivity extends SpeakeasyBase {
    connected?: boolean;
    disconnectReason?: string;
    timestamp?: number;
}
