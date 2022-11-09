import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionsEnum } from "./permissionsenum";
export declare class DescribeEnvironmentMembershipsRequest extends SpeakeasyBase {
    environmentId?: string;
    maxResults?: number;
    nextToken?: string;
    permissions?: PermissionsEnum[];
    userArn?: string;
}
