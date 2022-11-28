import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";



// NotificationConfiguration
/** 
 * The configuration for notifications stored for each profiling group. This includes up to to two channels and a list of event publishers associated with each channel.
**/
export class NotificationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels", elemType: Channel })
  channels?: Channel[];
}
