import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MergeHunkDetail } from "./mergehunkdetail";



// MergeHunk
/** 
 * Information about merge hunks in a merge or pull request operation.
**/
export class MergeHunk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base" })
  base?: MergeHunkDetail;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: MergeHunkDetail;

  @SpeakeasyMetadata({ data: "json, name=isConflict" })
  isConflict?: boolean;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: MergeHunkDetail;
}
