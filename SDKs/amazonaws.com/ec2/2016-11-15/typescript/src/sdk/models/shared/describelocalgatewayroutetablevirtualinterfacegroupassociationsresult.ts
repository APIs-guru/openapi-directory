import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalGatewayRouteTableVirtualInterfaceGroupAssociation } from "./localgatewayroutetablevirtualinterfacegroupassociation";



export class DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LocalGatewayRouteTableVirtualInterfaceGroupAssociation })
  localGatewayRouteTableVirtualInterfaceGroupAssociations?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
