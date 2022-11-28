import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EgressOnlyInternetGateway } from "./egressonlyinternetgateway";



export class DescribeEgressOnlyInternetGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EgressOnlyInternetGateway })
  egressOnlyInternetGateways?: EgressOnlyInternetGateway[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
