import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DockerVolumeConfiguration } from "./dockervolumeconfiguration";
import { EfsVolumeConfiguration } from "./efsvolumeconfiguration";
import { FSxWindowsFileServerVolumeConfiguration } from "./fsxwindowsfileservervolumeconfiguration";
import { HostVolumeProperties } from "./hostvolumeproperties";


// Volume
/** 
 * A data volume used in a task definition. For tasks that use the Amazon Elastic File System (Amazon EFS), specify an <code>efsVolumeConfiguration</code>. For Windows tasks that use Amazon FSx for Windows File Server file system, specify a <code>fsxWindowsFileServerVolumeConfiguration</code>. For tasks that use a Docker volume, specify a <code>DockerVolumeConfiguration</code>. For tasks that use a bind mount host volume, specify a <code>host</code> and optional <code>sourcePath</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using Data Volumes in Tasks</a>.
**/
export class Volume extends SpeakeasyBase {
  @Metadata({ data: "json, name=dockerVolumeConfiguration" })
  dockerVolumeConfiguration?: DockerVolumeConfiguration;

  @Metadata({ data: "json, name=efsVolumeConfiguration" })
  efsVolumeConfiguration?: EfsVolumeConfiguration;

  @Metadata({ data: "json, name=fsxWindowsFileServerVolumeConfiguration" })
  fsxWindowsFileServerVolumeConfiguration?: FSxWindowsFileServerVolumeConfiguration;

  @Metadata({ data: "json, name=host" })
  host?: HostVolumeProperties;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
