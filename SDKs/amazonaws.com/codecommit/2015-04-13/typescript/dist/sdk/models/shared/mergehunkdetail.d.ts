import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.
**/
export declare class MergeHunkDetail extends SpeakeasyBase {
    endLine?: number;
    hunkContent?: string;
    startLine?: number;
}
