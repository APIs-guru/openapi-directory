import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaFilesystemPermissionEnum } from "./lambdafilesystempermissionenum";
/**
 * Contains information about a device that Linux processes in a container can access.
**/
export declare class LambdaDeviceMount extends SpeakeasyBase {
    addGroupOwner?: boolean;
    path: string;
    permission?: LambdaFilesystemPermissionEnum;
}
