import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Channel } from "./channel";


// NotificationConfiguration
/** 
 * The configuration for notifications stored for each profiling group. This includes up to to two channels and a list of event publishers associated with each channel.
**/
export class NotificationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels", elemType: shared.Channel })
  channels?: Channel[];
}
