import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AgentNetworkInfo
/** 
 * Network details about the host where the agent/connector resides.
**/
export class AgentNetworkInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=macAddress" })
  macAddress?: string;
}
