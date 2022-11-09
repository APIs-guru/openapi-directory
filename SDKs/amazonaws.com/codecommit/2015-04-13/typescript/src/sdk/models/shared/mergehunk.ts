import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MergeHunkDetail } from "./mergehunkdetail";
import { MergeHunkDetail } from "./mergehunkdetail";
import { MergeHunkDetail } from "./mergehunkdetail";


// MergeHunk
/** 
 * Information about merge hunks in a merge or pull request operation.
**/
export class MergeHunk extends SpeakeasyBase {
  @Metadata({ data: "json, name=base" })
  base?: MergeHunkDetail;

  @Metadata({ data: "json, name=destination" })
  destination?: MergeHunkDetail;

  @Metadata({ data: "json, name=isConflict" })
  isConflict?: boolean;

  @Metadata({ data: "json, name=source" })
  source?: MergeHunkDetail;
}
