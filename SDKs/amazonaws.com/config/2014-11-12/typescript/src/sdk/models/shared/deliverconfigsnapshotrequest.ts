import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeliverConfigSnapshotRequest
/** 
 * The input for the <a>DeliverConfigSnapshot</a> action.
**/
export class DeliverConfigSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliveryChannelName" })
  deliveryChannelName: string;
}
