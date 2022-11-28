import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalClusterMember } from "./globalclustermember";
/**
 * A data type representing an Amazon DocumentDB global cluster.
**/
export declare class GlobalCluster extends SpeakeasyBase {
    databaseName?: string;
    deletionProtection?: boolean;
    engine?: string;
    engineVersion?: string;
    globalClusterArn?: string;
    globalClusterIdentifier?: string;
    globalClusterMembers?: GlobalClusterMember[];
    globalClusterResourceId?: string;
    status?: string;
    storageEncrypted?: boolean;
}
