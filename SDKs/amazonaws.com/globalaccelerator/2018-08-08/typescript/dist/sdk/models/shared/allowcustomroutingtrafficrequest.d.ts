import { SpeakeasyBase } from "../../../internal/utils";
export declare class AllowCustomRoutingTrafficRequest extends SpeakeasyBase {
    allowAllTrafficToEndpoint?: boolean;
    destinationAddresses?: string[];
    destinationPorts?: number[];
    endpointGroupArn: string;
    endpointId: string;
}
