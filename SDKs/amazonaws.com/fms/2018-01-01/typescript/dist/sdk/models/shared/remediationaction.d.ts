import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2AssociateRouteTableAction } from "./ec2associateroutetableaction";
import { Ec2CopyRouteTableAction } from "./ec2copyroutetableaction";
import { Ec2CreateRouteAction } from "./ec2createrouteaction";
import { Ec2CreateRouteTableAction } from "./ec2createroutetableaction";
import { Ec2DeleteRouteAction } from "./ec2deleterouteaction";
import { Ec2ReplaceRouteAction } from "./ec2replacerouteaction";
import { Ec2ReplaceRouteTableAssociationAction } from "./ec2replaceroutetableassociationaction";
/**
 * Information about an individual action you can take to remediate a violation.
**/
export declare class RemediationAction extends SpeakeasyBase {
    description?: string;
    ec2AssociateRouteTableAction?: Ec2AssociateRouteTableAction;
    ec2CopyRouteTableAction?: Ec2CopyRouteTableAction;
    ec2CreateRouteAction?: Ec2CreateRouteAction;
    ec2CreateRouteTableAction?: Ec2CreateRouteTableAction;
    ec2DeleteRouteAction?: Ec2DeleteRouteAction;
    ec2ReplaceRouteAction?: Ec2ReplaceRouteAction;
    ec2ReplaceRouteTableAssociationAction?: Ec2ReplaceRouteTableAssociationAction;
}
