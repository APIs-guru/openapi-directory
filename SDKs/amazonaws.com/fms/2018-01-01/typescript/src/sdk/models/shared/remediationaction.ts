import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2AssociateRouteTableAction } from "./ec2associateroutetableaction";
import { Ec2CopyRouteTableAction } from "./ec2copyroutetableaction";
import { Ec2CreateRouteAction } from "./ec2createrouteaction";
import { Ec2CreateRouteTableAction } from "./ec2createroutetableaction";
import { Ec2DeleteRouteAction } from "./ec2deleterouteaction";
import { Ec2ReplaceRouteAction } from "./ec2replacerouteaction";
import { Ec2ReplaceRouteTableAssociationAction } from "./ec2replaceroutetableassociationaction";



// RemediationAction
/** 
 * Information about an individual action you can take to remediate a violation.
**/
export class RemediationAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EC2AssociateRouteTableAction" })
  ec2AssociateRouteTableAction?: Ec2AssociateRouteTableAction;

  @SpeakeasyMetadata({ data: "json, name=EC2CopyRouteTableAction" })
  ec2CopyRouteTableAction?: Ec2CopyRouteTableAction;

  @SpeakeasyMetadata({ data: "json, name=EC2CreateRouteAction" })
  ec2CreateRouteAction?: Ec2CreateRouteAction;

  @SpeakeasyMetadata({ data: "json, name=EC2CreateRouteTableAction" })
  ec2CreateRouteTableAction?: Ec2CreateRouteTableAction;

  @SpeakeasyMetadata({ data: "json, name=EC2DeleteRouteAction" })
  ec2DeleteRouteAction?: Ec2DeleteRouteAction;

  @SpeakeasyMetadata({ data: "json, name=EC2ReplaceRouteAction" })
  ec2ReplaceRouteAction?: Ec2ReplaceRouteAction;

  @SpeakeasyMetadata({ data: "json, name=EC2ReplaceRouteTableAssociationAction" })
  ec2ReplaceRouteTableAssociationAction?: Ec2ReplaceRouteTableAssociationAction;
}
