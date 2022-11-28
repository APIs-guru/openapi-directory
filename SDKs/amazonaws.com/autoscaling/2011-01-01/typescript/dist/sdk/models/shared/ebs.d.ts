import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes information used to set up an Amazon EBS volume specified in a block device mapping.
**/
export declare class Ebs extends SpeakeasyBase {
    deleteOnTermination?: boolean;
    encrypted?: boolean;
    iops?: number;
    snapshotId?: string;
    throughput?: number;
    volumeSize?: number;
    volumeType?: string;
}
