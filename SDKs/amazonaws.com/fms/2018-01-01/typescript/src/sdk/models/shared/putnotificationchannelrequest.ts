import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutNotificationChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnsRoleName" })
  snsRoleName: string;

  @Metadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn: string;
}
