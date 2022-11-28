import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionsEnum } from "./permissionsenum";



// EnvironmentMember
/** 
 * Information about an environment member for an Cloud9 development environment.
**/
export class EnvironmentMember extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId: string;

  @SpeakeasyMetadata({ data: "json, name=lastAccess" })
  lastAccess?: Date;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: PermissionsEnum;

  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}
