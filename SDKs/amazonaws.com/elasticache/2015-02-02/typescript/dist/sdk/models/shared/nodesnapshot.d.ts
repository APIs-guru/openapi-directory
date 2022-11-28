import { SpeakeasyBase } from "../../../internal/utils";
import { NodeGroupConfiguration } from "./nodegroupconfiguration";
/**
 * Represents an individual cache node in a snapshot of a cluster.
**/
export declare class NodeSnapshot extends SpeakeasyBase {
    cacheClusterId?: string;
    cacheNodeCreateTime?: Date;
    cacheNodeId?: string;
    cacheSize?: string;
    nodeGroupConfiguration?: NodeGroupConfiguration;
    nodeGroupId?: string;
    snapshotCreateTime?: Date;
}
