import { SpeakeasyBase } from "../../../internal/utils";
import { TagListEntry } from "./taglistentry";
/**
 * CreateAgentRequest
**/
export declare class CreateAgentRequest extends SpeakeasyBase {
    activationKey: string;
    agentName?: string;
    securityGroupArns?: string[];
    subnetArns?: string[];
    tags?: TagListEntry[];
    vpcEndpointId?: string;
}
