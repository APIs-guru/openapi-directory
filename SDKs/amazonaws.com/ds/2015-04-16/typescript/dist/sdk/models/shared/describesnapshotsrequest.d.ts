import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the inputs for the <a>DescribeSnapshots</a> operation.
**/
export declare class DescribeSnapshotsRequest extends SpeakeasyBase {
    directoryId?: string;
    limit?: number;
    nextToken?: string;
    snapshotIds?: string[];
}
