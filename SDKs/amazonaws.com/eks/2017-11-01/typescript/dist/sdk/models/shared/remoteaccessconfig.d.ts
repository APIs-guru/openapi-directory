import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing the remote access configuration for the managed node group.
**/
export declare class RemoteAccessConfig extends SpeakeasyBase {
    ec2SshKey?: string;
    sourceSecurityGroups?: string[];
}
