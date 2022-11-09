import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionsEnum } from "./permissionsenum";
/**
 * Information about an environment member for an Cloud9 development environment.
**/
export declare class EnvironmentMember extends SpeakeasyBase {
    environmentId: string;
    lastAccess?: Date;
    permissions: PermissionsEnum;
    userArn: string;
    userId: string;
}
