import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VersionInfo
/** 
 * The Docker and Amazon ECS container agent version information about a container instance.
**/
export class VersionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentHash" })
  agentHash?: string;

  @SpeakeasyMetadata({ data: "json, name=agentVersion" })
  agentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerVersion" })
  dockerVersion?: string;
}
