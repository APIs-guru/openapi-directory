import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScopeEnum } from "./scopeenum";



// DockerVolumeConfiguration
/** 
 * This parameter is specified when you are using Docker volumes. Docker volumes are only supported when you are using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead.
**/
export class DockerVolumeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoprovision" })
  autoprovision?: boolean;

  @SpeakeasyMetadata({ data: "json, name=driver" })
  driver?: string;

  @SpeakeasyMetadata({ data: "json, name=driverOpts" })
  driverOpts?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: ScopeEnum;
}
