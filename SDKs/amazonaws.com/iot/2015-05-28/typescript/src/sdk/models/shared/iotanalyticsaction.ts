import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IotAnalyticsAction
/** 
 * Sends message data to an IoT Analytics channel.
**/
export class IotAnalyticsAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchMode" })
  batchMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=channelArn" })
  channelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=channelName" })
  channelName?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
