import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentMember } from "./environmentmember";



export class DescribeEnvironmentMembershipsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberships", elemType: EnvironmentMember })
  memberships?: EnvironmentMember[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
