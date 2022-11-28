import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityGroupReference } from "./securitygroupreference";



export class DescribeSecurityGroupReferencesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SecurityGroupReference })
  securityGroupReferenceSet?: SecurityGroupReference[];
}
