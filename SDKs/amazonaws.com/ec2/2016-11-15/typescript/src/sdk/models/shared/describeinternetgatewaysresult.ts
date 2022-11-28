import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InternetGateway } from "./internetgateway";



export class DescribeInternetGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InternetGateway })
  internetGateways?: InternetGateway[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
