import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NatGateway } from "./natgateway";



export class DescribeNatGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: NatGateway })
  natGateways?: NatGateway[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
