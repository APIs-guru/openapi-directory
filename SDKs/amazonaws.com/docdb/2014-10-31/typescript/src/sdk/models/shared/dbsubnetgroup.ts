import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";



// DbSubnetGroup
/** 
 * Detailed information about a subnet group. 
**/
export class DbSubnetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSubnetGroupArn?: string;

  @SpeakeasyMetadata()
  dbSubnetGroupDescription?: string;

  @SpeakeasyMetadata()
  dbSubnetGroupName?: string;

  @SpeakeasyMetadata()
  subnetGroupStatus?: string;

  @SpeakeasyMetadata({ elemType: Subnet })
  subnets?: Subnet[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
