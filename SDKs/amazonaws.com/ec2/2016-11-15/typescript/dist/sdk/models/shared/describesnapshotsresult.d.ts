import { SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";
export declare class DescribeSnapshotsResult extends SpeakeasyBase {
    nextToken?: string;
    snapshots?: Snapshot[];
}
