import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaFilesystemPermissionEnum } from "./lambdafilesystempermissionenum";



// LambdaVolumeMount
/** 
 * Contains information about a volume that Linux processes in a container can access. When you define a volume, the IoT Greengrass Core software mounts the source files to the destination inside the container.
**/
export class LambdaVolumeMount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addGroupOwner" })
  addGroupOwner?: boolean;

  @SpeakeasyMetadata({ data: "json, name=destinationPath" })
  destinationPath: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: LambdaFilesystemPermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=sourcePath" })
  sourcePath: string;
}
