import { SpeakeasyBase } from "../../../internal/utils";
import { UserBucketDetails } from "./userbucketdetails";
/**
 * Details about the import snapshot task.
**/
export declare class SnapshotTaskDetail extends SpeakeasyBase {
    description?: string;
    diskImageSize?: number;
    encrypted?: boolean;
    format?: string;
    kmsKeyId?: string;
    progress?: string;
    snapshotId?: string;
    status?: string;
    statusMessage?: string;
    url?: string;
    userBucket?: UserBucketDetails;
}
