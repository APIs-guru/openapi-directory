import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNotificationChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnsRoleName" })
  snsRoleName?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;
}
