import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StaleSecurityGroup } from "./stalesecuritygroup";



export class DescribeStaleSecurityGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: StaleSecurityGroup })
  staleSecurityGroupSet?: StaleSecurityGroup[];
}
