import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HostVolumeProperties
/** 
 * Details on a container instance bind mount host volume.
**/
export class HostVolumeProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourcePath" })
  sourcePath?: string;
}
