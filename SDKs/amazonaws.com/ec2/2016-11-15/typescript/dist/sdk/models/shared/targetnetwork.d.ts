import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatus } from "./associationstatus";
/**
 * Describes a target network associated with a Client VPN endpoint.
**/
export declare class TargetNetwork extends SpeakeasyBase {
    associationId?: string;
    clientVpnEndpointId?: string;
    securityGroups?: string[];
    status?: AssociationStatus;
    targetNetworkId?: string;
    vpcId?: string;
}
