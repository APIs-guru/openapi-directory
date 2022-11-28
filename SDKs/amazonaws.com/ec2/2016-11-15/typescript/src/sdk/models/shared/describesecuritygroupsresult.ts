import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityGroup } from "./securitygroup";



export class DescribeSecurityGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: SecurityGroup })
  securityGroups?: SecurityGroup[];
}
