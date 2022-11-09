import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AgentNetworkInfo
/** 
 * Network details about the host where the agent/connector resides.
**/
export class AgentNetworkInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=macAddress" })
  macAddress?: string;
}
