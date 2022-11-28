import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionTypeEnum } from "./subscriptiontypeenum";



// CreateHsmRequest
/** 
 * Contains the inputs for the <code>CreateHsm</code> operation.
**/
export class CreateHsmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=EniIp" })
  eniIp?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=IamRoleArn" })
  iamRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=SshKey" })
  sshKey: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionType" })
  subscriptionType: SubscriptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SyslogIp" })
  syslogIp?: string;
}
