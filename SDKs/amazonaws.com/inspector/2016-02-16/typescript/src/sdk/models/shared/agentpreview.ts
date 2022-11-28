import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentHealthEnum } from "./agenthealthenum";



// AgentPreview
/** 
 * Used as a response element in the <a>PreviewAgents</a> action.
**/
export class AgentPreview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentHealth" })
  agentHealth?: AgentHealthEnum;

  @SpeakeasyMetadata({ data: "json, name=agentId" })
  agentId: string;

  @SpeakeasyMetadata({ data: "json, name=agentVersion" })
  agentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=autoScalingGroup" })
  autoScalingGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=ipv4Address" })
  ipv4Address?: string;

  @SpeakeasyMetadata({ data: "json, name=kernelVersion" })
  kernelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=operatingSystem" })
  operatingSystem?: string;
}
