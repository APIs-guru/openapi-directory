import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HsmStateEnum } from "./hsmstateenum";


// Hsm
/** 
 * Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster.
**/
export class Hsm extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=EniId" })
  eniId?: string;

  @Metadata({ data: "json, name=EniIp" })
  eniIp?: string;

  @Metadata({ data: "json, name=HsmId" })
  hsmId: string;

  @Metadata({ data: "json, name=State" })
  state?: HsmStateEnum;

  @Metadata({ data: "json, name=StateMessage" })
  stateMessage?: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;
}
