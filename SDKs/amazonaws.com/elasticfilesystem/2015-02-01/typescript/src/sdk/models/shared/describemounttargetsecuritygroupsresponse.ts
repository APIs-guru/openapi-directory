import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeMountTargetSecurityGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroups" })
  securityGroups: string[];
}
