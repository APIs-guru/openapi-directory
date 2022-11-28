import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaFilesystemPermissionEnum } from "./lambdafilesystempermissionenum";



// LambdaDeviceMount
/** 
 * Contains information about a device that Linux processes in a container can access.
**/
export class LambdaDeviceMount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addGroupOwner" })
  addGroupOwner?: boolean;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: LambdaFilesystemPermissionEnum;
}
