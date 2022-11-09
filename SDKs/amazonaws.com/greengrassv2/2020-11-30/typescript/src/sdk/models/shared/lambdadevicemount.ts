import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaFilesystemPermissionEnum } from "./lambdafilesystempermissionenum";


// LambdaDeviceMount
/** 
 * Contains information about a device that Linux processes in a container can access.
**/
export class LambdaDeviceMount extends SpeakeasyBase {
  @Metadata({ data: "json, name=addGroupOwner" })
  addGroupOwner?: boolean;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=permission" })
  permission?: LambdaFilesystemPermissionEnum;
}
