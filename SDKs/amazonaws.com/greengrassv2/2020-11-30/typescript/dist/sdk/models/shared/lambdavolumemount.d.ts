import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaFilesystemPermissionEnum } from "./lambdafilesystempermissionenum";
/**
 * Contains information about a volume that Linux processes in a container can access. When you define a volume, the IoT Greengrass Core software mounts the source files to the destination inside the container.
**/
export declare class LambdaVolumeMount extends SpeakeasyBase {
    addGroupOwner?: boolean;
    destinationPath: string;
    permission?: LambdaFilesystemPermissionEnum;
    sourcePath: string;
}
