import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Subnet } from "./subnet";


// SubnetGroup
/** 
 * <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul>
**/
export class SubnetGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName?: string;

  @Metadata({ data: "json, name=Subnets", elemType: shared.Subnet })
  subnets?: Subnet[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
