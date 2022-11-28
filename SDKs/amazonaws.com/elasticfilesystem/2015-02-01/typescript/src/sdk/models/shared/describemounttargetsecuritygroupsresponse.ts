import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeMountTargetSecurityGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroups" })
  securityGroups: string[];
}
