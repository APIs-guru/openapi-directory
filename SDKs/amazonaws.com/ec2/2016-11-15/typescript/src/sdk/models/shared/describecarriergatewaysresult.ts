import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CarrierGateway } from "./carriergateway";



export class DescribeCarrierGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CarrierGateway })
  carrierGateways?: CarrierGateway[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
