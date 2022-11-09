import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MountPoint
/** 
 * Details on a Docker volume mount point that's used in a job's container properties. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a container</a> section of the Docker Remote API and the <code>--volume</code> option to docker run.
**/
export class MountPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerPath" })
  containerPath?: string;

  @Metadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=sourceVolume" })
  sourceVolume?: string;
}
