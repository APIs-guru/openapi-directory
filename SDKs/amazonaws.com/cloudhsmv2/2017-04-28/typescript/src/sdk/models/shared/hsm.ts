import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HsmStateEnum } from "./hsmstateenum";



// Hsm
/** 
 * Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster.
**/
export class Hsm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=EniId" })
  eniId?: string;

  @SpeakeasyMetadata({ data: "json, name=EniIp" })
  eniIp?: string;

  @SpeakeasyMetadata({ data: "json, name=HsmId" })
  hsmId: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: HsmStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateMessage" })
  stateMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;
}
