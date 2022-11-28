import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



// DescribeSnapshotsResult
/** 
 * Contains the results of the <a>DescribeSnapshots</a> operation.
**/
export class DescribeSnapshotsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Snapshots", elemType: Snapshot })
  snapshots?: Snapshot[];
}
