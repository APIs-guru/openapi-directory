import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FSxWindowsFileServerAuthorizationConfig } from "./fsxwindowsfileserverauthorizationconfig";



// FSxWindowsFileServerVolumeConfiguration
/** 
 * <p>This parameter is specified when you are using <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html">Amazon FSx for Windows File Server</a> file system for task storage.</p> <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
**/
export class FSxWindowsFileServerVolumeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationConfig" })
  authorizationConfig: FSxWindowsFileServerAuthorizationConfig;

  @SpeakeasyMetadata({ data: "json, name=fileSystemId" })
  fileSystemId: string;

  @SpeakeasyMetadata({ data: "json, name=rootDirectory" })
  rootDirectory: string;
}
