import { SpeakeasyBase } from "../../../internal/utils";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndex } from "./globalsecondaryindex";
import { LocalSecondaryIndex } from "./localsecondaryindex";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { SseSpecification } from "./ssespecification";
export declare class RestoreTableFromBackupInput extends SpeakeasyBase {
    backupArn: string;
    billingModeOverride?: BillingModeEnum;
    globalSecondaryIndexOverride?: GlobalSecondaryIndex[];
    localSecondaryIndexOverride?: LocalSecondaryIndex[];
    provisionedThroughputOverride?: ProvisionedThroughput;
    sseSpecificationOverride?: SseSpecification;
    targetTableName: string;
}
