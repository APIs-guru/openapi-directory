import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Snapshot } from "./snapshot";


// DescribeSnapshotsResult
/** 
 * Contains the results of the <a>DescribeSnapshots</a> operation.
**/
export class DescribeSnapshotsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Snapshots", elemType: shared.Snapshot })
  snapshots?: Snapshot[];
}
