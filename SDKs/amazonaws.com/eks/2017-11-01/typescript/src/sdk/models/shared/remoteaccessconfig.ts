import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoteAccessConfig
/** 
 * An object representing the remote access configuration for the managed node group.
**/
export class RemoteAccessConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ec2SshKey" })
  ec2SshKey?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceSecurityGroups" })
  sourceSecurityGroups?: string[];
}
