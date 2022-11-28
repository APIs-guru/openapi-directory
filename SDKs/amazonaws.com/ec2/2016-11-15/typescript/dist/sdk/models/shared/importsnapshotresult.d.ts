import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotTaskDetail } from "./snapshottaskdetail";
import { Tag } from "./tag";
export declare class ImportSnapshotResult extends SpeakeasyBase {
    description?: string;
    importTaskId?: string;
    snapshotTaskDetail?: SnapshotTaskDetail;
    tags?: Tag[];
}
