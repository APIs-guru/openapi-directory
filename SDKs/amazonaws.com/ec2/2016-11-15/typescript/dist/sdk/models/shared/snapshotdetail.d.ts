import { SpeakeasyBase } from "../../../internal/utils";
import { UserBucketDetails } from "./userbucketdetails";
/**
 * Describes the snapshot created from the imported disk.
**/
export declare class SnapshotDetail extends SpeakeasyBase {
    description?: string;
    deviceName?: string;
    diskImageSize?: number;
    format?: string;
    progress?: string;
    snapshotId?: string;
    status?: string;
    statusMessage?: string;
    url?: string;
    userBucket?: UserBucketDetails;
}
