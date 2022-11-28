import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalNodeGroup } from "./globalnodegroup";
import { GlobalReplicationGroupMember } from "./globalreplicationgroupmember";
/**
 * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>
**/
export declare class GlobalReplicationGroup extends SpeakeasyBase {
    arn?: string;
    atRestEncryptionEnabled?: boolean;
    authTokenEnabled?: boolean;
    cacheNodeType?: string;
    clusterEnabled?: boolean;
    engine?: string;
    engineVersion?: string;
    globalNodeGroups?: GlobalNodeGroup[];
    globalReplicationGroupDescription?: string;
    globalReplicationGroupId?: string;
    members?: GlobalReplicationGroupMember[];
    status?: string;
    transitEncryptionEnabled?: boolean;
}
