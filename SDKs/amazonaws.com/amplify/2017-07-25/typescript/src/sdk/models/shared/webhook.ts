import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Webhook
/** 
 *  Describes a webhook that connects repository events to an Amplify app. 
**/
export class Webhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchName" })
  branchName: string;

  @Metadata({ data: "json, name=createTime" })
  createTime: Date;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime: Date;

  @Metadata({ data: "json, name=webhookArn" })
  webhookArn: string;

  @Metadata({ data: "json, name=webhookId" })
  webhookId: string;

  @Metadata({ data: "json, name=webhookUrl" })
  webhookUrl: string;
}
