import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubscriptionTypeEnum } from "./subscriptiontypeenum";


// CreateHsmRequest
/** 
 * Contains the inputs for the <code>CreateHsm</code> operation.
**/
export class CreateHsmRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=EniIp" })
  eniIp?: string;

  @Metadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @Metadata({ data: "json, name=IamRoleArn" })
  iamRoleArn: string;

  @Metadata({ data: "json, name=SshKey" })
  sshKey: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId: string;

  @Metadata({ data: "json, name=SubscriptionType" })
  subscriptionType: SubscriptionTypeEnum;

  @Metadata({ data: "json, name=SyslogIp" })
  syslogIp?: string;
}
