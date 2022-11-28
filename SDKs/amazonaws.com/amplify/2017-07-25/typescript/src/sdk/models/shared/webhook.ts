import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Webhook
/** 
 *  Describes a webhook that connects repository events to an Amplify app. 
**/
export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchName" })
  branchName: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=webhookArn" })
  webhookArn: string;

  @SpeakeasyMetadata({ data: "json, name=webhookId" })
  webhookId: string;

  @SpeakeasyMetadata({ data: "json, name=webhookUrl" })
  webhookUrl: string;
}
