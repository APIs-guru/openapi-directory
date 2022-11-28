import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MergeHunkDetail
/** 
 * Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.
**/
export class MergeHunkDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endLine" })
  endLine?: number;

  @SpeakeasyMetadata({ data: "json, name=hunkContent" })
  hunkContent?: string;

  @SpeakeasyMetadata({ data: "json, name=startLine" })
  startLine?: number;
}
