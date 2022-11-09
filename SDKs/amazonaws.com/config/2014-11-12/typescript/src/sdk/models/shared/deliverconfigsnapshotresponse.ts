import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeliverConfigSnapshotResponse
/** 
 * The output for the <a>DeliverConfigSnapshot</a> action, in JSON format.
**/
export class DeliverConfigSnapshotResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configSnapshotId" })
  configSnapshotId?: string;
}
