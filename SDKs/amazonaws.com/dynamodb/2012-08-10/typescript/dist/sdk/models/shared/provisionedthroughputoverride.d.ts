import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings.
**/
export declare class ProvisionedThroughputOverride extends SpeakeasyBase {
    readCapacityUnits?: number;
}
