import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagListEntry } from "./taglistentry";


// CreateAgentRequest
/** 
 * CreateAgentRequest
**/
export class CreateAgentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivationKey" })
  activationKey: string;

  @Metadata({ data: "json, name=AgentName" })
  agentName?: string;

  @Metadata({ data: "json, name=SecurityGroupArns" })
  securityGroupArns?: string[];

  @Metadata({ data: "json, name=SubnetArns" })
  subnetArns?: string[];

  @Metadata({ data: "json, name=Tags", elemType: shared.TagListEntry })
  tags?: TagListEntry[];

  @Metadata({ data: "json, name=VpcEndpointId" })
  vpcEndpointId?: string;
}
