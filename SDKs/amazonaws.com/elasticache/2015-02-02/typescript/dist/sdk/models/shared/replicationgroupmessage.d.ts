import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationGroup } from "./replicationgroup";
/**
 * Represents the output of a <code>DescribeReplicationGroups</code> operation.
**/
export declare class ReplicationGroupMessage extends SpeakeasyBase {
    marker?: string;
    replicationGroups?: ReplicationGroup[];
}
