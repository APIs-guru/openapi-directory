import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectivityTypeEnum } from "./connectivitytypeenum";
import { NatGatewayAddress } from "./natgatewayaddress";
import { ProvisionedBandwidth } from "./provisionedbandwidth";
import { NatGatewayStateEnum } from "./natgatewaystateenum";
import { Tag } from "./tag";



// NatGateway
/** 
 * Describes a NAT gateway.
**/
export class NatGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectivityType?: ConnectivityTypeEnum;

  @SpeakeasyMetadata()
  createTime?: Date;

  @SpeakeasyMetadata()
  deleteTime?: Date;

  @SpeakeasyMetadata()
  failureCode?: string;

  @SpeakeasyMetadata()
  failureMessage?: string;

  @SpeakeasyMetadata({ elemType: NatGatewayAddress })
  natGatewayAddresses?: NatGatewayAddress[];

  @SpeakeasyMetadata()
  natGatewayId?: string;

  @SpeakeasyMetadata()
  provisionedBandwidth?: ProvisionedBandwidth;

  @SpeakeasyMetadata()
  state?: NatGatewayStateEnum;

  @SpeakeasyMetadata()
  subnetId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
