import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MergeHunkDetail
/** 
 * Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.
**/
export class MergeHunkDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=endLine" })
  endLine?: number;

  @Metadata({ data: "json, name=hunkContent" })
  hunkContent?: string;

  @Metadata({ data: "json, name=startLine" })
  startLine?: number;
}
