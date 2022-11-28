import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class CreateVpcPeeringConnectionInput extends SpeakeasyBase {
    fleetId: string;
    peerVpcAwsAccountId: string;
    peerVpcId: string;
}
