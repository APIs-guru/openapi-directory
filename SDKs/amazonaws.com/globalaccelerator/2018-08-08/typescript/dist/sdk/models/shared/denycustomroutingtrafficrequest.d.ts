import { SpeakeasyBase } from "../../../internal/utils";
export declare class DenyCustomRoutingTrafficRequest extends SpeakeasyBase {
    denyAllTrafficToEndpoint?: boolean;
    destinationAddresses?: string[];
    destinationPorts?: number[];
    endpointGroupArn: string;
    endpointId: string;
}
