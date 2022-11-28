import { SpeakeasyBase } from "../../../internal/utils";
import { AutoTerminationPolicy } from "./autoterminationpolicy";
export declare class PutAutoTerminationPolicyInput extends SpeakeasyBase {
    autoTerminationPolicy?: AutoTerminationPolicy;
    clusterId: string;
}
