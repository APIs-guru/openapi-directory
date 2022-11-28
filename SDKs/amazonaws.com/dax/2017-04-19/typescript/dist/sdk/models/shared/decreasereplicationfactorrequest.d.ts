import { SpeakeasyBase } from "../../../internal/utils";
export declare class DecreaseReplicationFactorRequest extends SpeakeasyBase {
    availabilityZones?: string[];
    clusterName: string;
    newReplicationFactor: number;
    nodeIdsToRemove?: string[];
}
