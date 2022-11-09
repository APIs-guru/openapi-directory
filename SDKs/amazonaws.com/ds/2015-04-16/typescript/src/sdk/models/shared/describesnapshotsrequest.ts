import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeSnapshotsRequest
/** 
 * Contains the inputs for the <a>DescribeSnapshots</a> operation.
**/
export class DescribeSnapshotsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SnapshotIds" })
  snapshotIds?: string[];
}
