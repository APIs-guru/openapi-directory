import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalGateway } from "./localgateway";



export class DescribeLocalGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LocalGateway })
  localGateways?: LocalGateway[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
