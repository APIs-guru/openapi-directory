import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EstimatedResourceSize } from "./estimatedresourcesize";


// ChannelStatistics
/** 
 * Statistics information about the channel.
**/
export class ChannelStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=size" })
  size?: EstimatedResourceSize;
}
