import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class IncreaseReplicationFactorRequest extends SpeakeasyBase {
    availabilityZones?: string[];
    clusterName: string;
    newReplicationFactor: number;
}
