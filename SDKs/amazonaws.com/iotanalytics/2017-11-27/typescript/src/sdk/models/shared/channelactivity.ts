import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelActivity
/** 
 * The activity that determines the source of the messages to be processed.
**/
export class ChannelActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelName" })
  channelName: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}
