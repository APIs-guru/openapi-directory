import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AgentHealthEnum } from "./agenthealthenum";


// AgentPreview
/** 
 * Used as a response element in the <a>PreviewAgents</a> action.
**/
export class AgentPreview extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentHealth" })
  agentHealth?: AgentHealthEnum;

  @Metadata({ data: "json, name=agentId" })
  agentId: string;

  @Metadata({ data: "json, name=agentVersion" })
  agentVersion?: string;

  @Metadata({ data: "json, name=autoScalingGroup" })
  autoScalingGroup?: string;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=ipv4Address" })
  ipv4Address?: string;

  @Metadata({ data: "json, name=kernelVersion" })
  kernelVersion?: string;

  @Metadata({ data: "json, name=operatingSystem" })
  operatingSystem?: string;
}
