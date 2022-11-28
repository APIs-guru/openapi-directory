import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EstimatedResourceSize } from "./estimatedresourcesize";



// ChannelStatistics
/** 
 * Statistics information about the channel.
**/
export class ChannelStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: EstimatedResourceSize;
}
