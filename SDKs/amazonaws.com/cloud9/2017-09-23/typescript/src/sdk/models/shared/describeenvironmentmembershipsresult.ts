import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnvironmentMember } from "./environmentmember";


export class DescribeEnvironmentMembershipsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberships", elemType: shared.EnvironmentMember })
  memberships?: EnvironmentMember[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
