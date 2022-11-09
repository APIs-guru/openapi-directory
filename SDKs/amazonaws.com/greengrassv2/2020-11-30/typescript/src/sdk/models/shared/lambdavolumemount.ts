import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaFilesystemPermissionEnum } from "./lambdafilesystempermissionenum";


// LambdaVolumeMount
/** 
 * Contains information about a volume that Linux processes in a container can access. When you define a volume, the IoT Greengrass Core software mounts the source files to the destination inside the container.
**/
export class LambdaVolumeMount extends SpeakeasyBase {
  @Metadata({ data: "json, name=addGroupOwner" })
  addGroupOwner?: boolean;

  @Metadata({ data: "json, name=destinationPath" })
  destinationPath: string;

  @Metadata({ data: "json, name=permission" })
  permission?: LambdaFilesystemPermissionEnum;

  @Metadata({ data: "json, name=sourcePath" })
  sourcePath: string;
}
