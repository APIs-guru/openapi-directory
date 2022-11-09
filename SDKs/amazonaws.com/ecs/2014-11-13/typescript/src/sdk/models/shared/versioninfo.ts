import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VersionInfo
/** 
 * The Docker and Amazon ECS container agent version information about a container instance.
**/
export class VersionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentHash" })
  agentHash?: string;

  @Metadata({ data: "json, name=agentVersion" })
  agentVersion?: string;

  @Metadata({ data: "json, name=dockerVersion" })
  dockerVersion?: string;
}
