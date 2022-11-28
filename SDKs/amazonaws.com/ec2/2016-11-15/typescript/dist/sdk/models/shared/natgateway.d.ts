import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectivityTypeEnum } from "./connectivitytypeenum";
import { NatGatewayAddress } from "./natgatewayaddress";
import { ProvisionedBandwidth } from "./provisionedbandwidth";
import { NatGatewayStateEnum } from "./natgatewaystateenum";
import { Tag } from "./tag";
/**
 * Describes a NAT gateway.
**/
export declare class NatGateway extends SpeakeasyBase {
    connectivityType?: ConnectivityTypeEnum;
    createTime?: Date;
    deleteTime?: Date;
    failureCode?: string;
    failureMessage?: string;
    natGatewayAddresses?: NatGatewayAddress[];
    natGatewayId?: string;
    provisionedBandwidth?: ProvisionedBandwidth;
    state?: NatGatewayStateEnum;
    subnetId?: string;
    tags?: Tag[];
    vpcId?: string;
}
