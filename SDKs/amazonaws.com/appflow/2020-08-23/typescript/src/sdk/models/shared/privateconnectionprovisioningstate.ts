import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrivateConnectionProvisioningFailureCauseEnum } from "./privateconnectionprovisioningfailurecauseenum";
import { PrivateConnectionProvisioningStatusEnum } from "./privateconnectionprovisioningstatusenum";



// PrivateConnectionProvisioningState
/** 
 *  Specifies the private connection provisioning state. 
**/
export class PrivateConnectionProvisioningState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureCause" })
  failureCause?: PrivateConnectionProvisioningFailureCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=failureMessage" })
  failureMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PrivateConnectionProvisioningStatusEnum;
}
