import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionsEnum } from "./permissionsenum";


// EnvironmentMember
/** 
 * Information about an environment member for an Cloud9 development environment.
**/
export class EnvironmentMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentId" })
  environmentId: string;

  @Metadata({ data: "json, name=lastAccess" })
  lastAccess?: Date;

  @Metadata({ data: "json, name=permissions" })
  permissions: PermissionsEnum;

  @Metadata({ data: "json, name=userArn" })
  userArn: string;

  @Metadata({ data: "json, name=userId" })
  userId: string;
}
