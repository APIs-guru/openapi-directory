import { SpeakeasyBase } from "../../../internal/utils";
import { HsmStateEnum } from "./hsmstateenum";
/**
 * Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster.
**/
export declare class Hsm extends SpeakeasyBase {
    availabilityZone?: string;
    clusterId?: string;
    eniId?: string;
    eniIp?: string;
    hsmId: string;
    state?: HsmStateEnum;
    stateMessage?: string;
    subnetId?: string;
}
