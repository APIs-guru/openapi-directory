import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IotAnalyticsAction
/** 
 * Sends message data to an IoT Analytics channel.
**/
export class IotAnalyticsAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchMode" })
  batchMode?: boolean;

  @Metadata({ data: "json, name=channelArn" })
  channelArn?: string;

  @Metadata({ data: "json, name=channelName" })
  channelName?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
