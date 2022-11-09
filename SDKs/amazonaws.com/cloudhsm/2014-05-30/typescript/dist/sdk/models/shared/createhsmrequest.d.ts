import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SubscriptionTypeEnum } from "./subscriptiontypeenum";
/**
 * Contains the inputs for the <code>CreateHsm</code> operation.
**/
export declare class CreateHsmRequest extends SpeakeasyBase {
    clientToken?: string;
    eniIp?: string;
    externalId?: string;
    iamRoleArn: string;
    sshKey: string;
    subnetId: string;
    subscriptionType: SubscriptionTypeEnum;
    syslogIp?: string;
}
