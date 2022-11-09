import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelActivity
/** 
 * The activity that determines the source of the messages to be processed.
**/
export class ChannelActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelName" })
  channelName: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}
