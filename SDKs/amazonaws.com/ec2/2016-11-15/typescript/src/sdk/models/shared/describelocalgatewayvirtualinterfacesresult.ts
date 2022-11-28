import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalGatewayVirtualInterface } from "./localgatewayvirtualinterface";



export class DescribeLocalGatewayVirtualInterfacesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LocalGatewayVirtualInterface })
  localGatewayVirtualInterfaces?: LocalGatewayVirtualInterface[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
