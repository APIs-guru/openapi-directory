import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagListEntry } from "./taglistentry";



// CreateAgentRequest
/** 
 * CreateAgentRequest
**/
export class CreateAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivationKey" })
  activationKey: string;

  @SpeakeasyMetadata({ data: "json, name=AgentName" })
  agentName?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupArns" })
  securityGroupArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetArns" })
  subnetArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: TagListEntry })
  tags?: TagListEntry[];

  @SpeakeasyMetadata({ data: "json, name=VpcEndpointId" })
  vpcEndpointId?: string;
}
