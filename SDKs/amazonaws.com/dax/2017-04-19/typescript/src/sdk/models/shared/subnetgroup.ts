import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";



// SubnetGroup
/** 
 * <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul>
**/
export class SubnetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=Subnets", elemType: Subnet })
  subnets?: Subnet[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
