import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Host
/** 
 * Determine whether your data volume persists on the host container instance and where it is stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data isn't guaranteed to persist after the containers associated with it stop running.
**/
export class Host extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourcePath" })
  sourcePath?: string;
}
