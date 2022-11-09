import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrivateConnectionProvisioningFailureCauseEnum } from "./privateconnectionprovisioningfailurecauseenum";
import { PrivateConnectionProvisioningStatusEnum } from "./privateconnectionprovisioningstatusenum";


// PrivateConnectionProvisioningState
/** 
 *  Specifies the private connection provisioning state. 
**/
export class PrivateConnectionProvisioningState extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureCause" })
  failureCause?: PrivateConnectionProvisioningFailureCauseEnum;

  @Metadata({ data: "json, name=failureMessage" })
  failureMessage?: string;

  @Metadata({ data: "json, name=status" })
  status?: PrivateConnectionProvisioningStatusEnum;
}
