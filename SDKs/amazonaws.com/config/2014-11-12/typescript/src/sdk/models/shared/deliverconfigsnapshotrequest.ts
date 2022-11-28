import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeliverConfigSnapshotRequest
/** 
 * The input for the <a>DeliverConfigSnapshot</a> action.
**/
export class DeliverConfigSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliveryChannelName" })
  deliveryChannelName: string;
}
