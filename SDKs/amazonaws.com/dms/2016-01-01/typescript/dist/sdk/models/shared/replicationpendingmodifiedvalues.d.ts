import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides information about the values of pending modifications to a replication instance. This data type is an object of the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html"> <code>ReplicationInstance</code> </a> user-defined data type.
**/
export declare class ReplicationPendingModifiedValues extends SpeakeasyBase {
    allocatedStorage?: number;
    engineVersion?: string;
    multiAz?: boolean;
    replicationInstanceClass?: string;
}
