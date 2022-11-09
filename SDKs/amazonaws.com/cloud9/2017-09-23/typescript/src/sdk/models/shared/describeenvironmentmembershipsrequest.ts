import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionsEnum } from "./permissionsenum";


export class DescribeEnvironmentMembershipsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: PermissionsEnum[];

  @Metadata({ data: "json, name=userArn" })
  userArn?: string;
}
