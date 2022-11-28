import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotTaskDetail } from "./snapshottaskdetail";
import { Tag } from "./tag";
/**
 * Describes an import snapshot task.
**/
export declare class ImportSnapshotTask extends SpeakeasyBase {
    description?: string;
    importTaskId?: string;
    snapshotTaskDetail?: SnapshotTaskDetail;
    tags?: Tag[];
}
