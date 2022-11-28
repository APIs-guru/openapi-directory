import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeSnapshotsRequest
/** 
 * Contains the inputs for the <a>DescribeSnapshots</a> operation.
**/
export class DescribeSnapshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotIds" })
  snapshotIds?: string[];
}
