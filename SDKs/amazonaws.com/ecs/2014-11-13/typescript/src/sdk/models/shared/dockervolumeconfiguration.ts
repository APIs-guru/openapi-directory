import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScopeEnum } from "./scopeenum";


// DockerVolumeConfiguration
/** 
 * This parameter is specified when you are using Docker volumes. Docker volumes are only supported when you are using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead.
**/
export class DockerVolumeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoprovision" })
  autoprovision?: boolean;

  @Metadata({ data: "json, name=driver" })
  driver?: string;

  @Metadata({ data: "json, name=driverOpts" })
  driverOpts?: Map<string, string>;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=scope" })
  scope?: ScopeEnum;
}
