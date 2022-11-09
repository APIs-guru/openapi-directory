import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoteAccessConfig
/** 
 * An object representing the remote access configuration for the managed node group.
**/
export class RemoteAccessConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ec2SshKey" })
  ec2SshKey?: string;

  @Metadata({ data: "json, name=sourceSecurityGroups" })
  sourceSecurityGroups?: string[];
}
