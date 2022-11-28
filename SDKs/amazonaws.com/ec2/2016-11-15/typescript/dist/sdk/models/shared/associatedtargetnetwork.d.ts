import { SpeakeasyBase } from "../../../internal/utils";
import { AssociatedNetworkTypeEnum } from "./associatednetworktypeenum";
/**
 * Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.
**/
export declare class AssociatedTargetNetwork extends SpeakeasyBase {
    networkId?: string;
    networkType?: AssociatedNetworkTypeEnum;
}
