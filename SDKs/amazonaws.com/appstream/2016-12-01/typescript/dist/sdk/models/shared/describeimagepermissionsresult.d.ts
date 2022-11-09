import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SharedImagePermissions } from "./sharedimagepermissions";
export declare class DescribeImagePermissionsResult extends SpeakeasyBase {
    name?: string;
    nextToken?: string;
    sharedImagePermissionsList?: SharedImagePermissions[];
}
