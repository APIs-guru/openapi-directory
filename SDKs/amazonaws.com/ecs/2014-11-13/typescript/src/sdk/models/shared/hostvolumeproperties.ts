import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HostVolumeProperties
/** 
 * Details on a container instance bind mount host volume.
**/
export class HostVolumeProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourcePath" })
  sourcePath?: string;
}
