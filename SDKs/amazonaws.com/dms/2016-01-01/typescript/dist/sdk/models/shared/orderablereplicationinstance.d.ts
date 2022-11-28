import { SpeakeasyBase } from "../../../internal/utils";
import { ReleaseStatusValuesEnum } from "./releasestatusvaluesenum";
/**
 * In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage.
**/
export declare class OrderableReplicationInstance extends SpeakeasyBase {
    availabilityZones?: string[];
    defaultAllocatedStorage?: number;
    engineVersion?: string;
    includedAllocatedStorage?: number;
    maxAllocatedStorage?: number;
    minAllocatedStorage?: number;
    releaseStatus?: ReleaseStatusValuesEnum;
    replicationInstanceClass?: string;
    storageType?: string;
}
