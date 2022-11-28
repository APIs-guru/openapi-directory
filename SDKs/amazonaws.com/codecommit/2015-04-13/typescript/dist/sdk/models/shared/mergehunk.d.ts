import { SpeakeasyBase } from "../../../internal/utils";
import { MergeHunkDetail } from "./mergehunkdetail";
/**
 * Information about merge hunks in a merge or pull request operation.
**/
export declare class MergeHunk extends SpeakeasyBase {
    base?: MergeHunkDetail;
    destination?: MergeHunkDetail;
    isConflict?: boolean;
    source?: MergeHunkDetail;
}
