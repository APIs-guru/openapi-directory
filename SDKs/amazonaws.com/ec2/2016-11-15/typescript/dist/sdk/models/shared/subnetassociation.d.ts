import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayMulitcastDomainAssociationStateEnum } from "./transitgatewaymulitcastdomainassociationstateenum";
/**
 * Describes the subnet association with the transit gateway multicast domain.
**/
export declare class SubnetAssociation extends SpeakeasyBase {
    state?: TransitGatewayMulitcastDomainAssociationStateEnum;
    subnetId?: string;
}
