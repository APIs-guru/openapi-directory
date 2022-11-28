import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionsEnum } from "./permissionsenum";



export class DescribeEnvironmentMembershipsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: PermissionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn?: string;
}
