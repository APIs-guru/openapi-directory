import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeliverConfigSnapshotResponse
/** 
 * The output for the <a>DeliverConfigSnapshot</a> action, in JSON format.
**/
export class DeliverConfigSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configSnapshotId" })
  configSnapshotId?: string;
}
