import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalGatewayRouteTableVpcAssociation } from "./localgatewayroutetablevpcassociation";



export class DescribeLocalGatewayRouteTableVpcAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LocalGatewayRouteTableVpcAssociation })
  localGatewayRouteTableVpcAssociations?: LocalGatewayRouteTableVpcAssociation[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
