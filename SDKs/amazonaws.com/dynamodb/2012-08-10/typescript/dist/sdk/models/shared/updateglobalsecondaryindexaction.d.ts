import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedThroughput } from "./provisionedthroughput";
/**
 * Represents the new provisioned throughput settings to be applied to a global secondary index.
**/
export declare class UpdateGlobalSecondaryIndexAction extends SpeakeasyBase {
    indexName: string;
    provisionedThroughput: ProvisionedThroughput;
}
