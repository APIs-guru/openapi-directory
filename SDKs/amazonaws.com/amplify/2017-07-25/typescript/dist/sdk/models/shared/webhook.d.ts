import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  Describes a webhook that connects repository events to an Amplify app.
**/
export declare class Webhook extends SpeakeasyBase {
    branchName: string;
    createTime: Date;
    description: string;
    updateTime: Date;
    webhookArn: string;
    webhookId: string;
    webhookUrl: string;
}
