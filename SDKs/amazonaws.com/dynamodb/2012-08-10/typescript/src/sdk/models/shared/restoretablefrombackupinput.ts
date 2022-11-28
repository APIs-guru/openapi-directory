import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndex } from "./globalsecondaryindex";
import { LocalSecondaryIndex } from "./localsecondaryindex";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { SseSpecification } from "./ssespecification";



export class RestoreTableFromBackupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupArn" })
  backupArn: string;

  @SpeakeasyMetadata({ data: "json, name=BillingModeOverride" })
  billingModeOverride?: BillingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexOverride", elemType: GlobalSecondaryIndex })
  globalSecondaryIndexOverride?: GlobalSecondaryIndex[];

  @SpeakeasyMetadata({ data: "json, name=LocalSecondaryIndexOverride", elemType: LocalSecondaryIndex })
  localSecondaryIndexOverride?: LocalSecondaryIndex[];

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: ProvisionedThroughput;

  @SpeakeasyMetadata({ data: "json, name=SSESpecificationOverride" })
  sseSpecificationOverride?: SseSpecification;

  @SpeakeasyMetadata({ data: "json, name=TargetTableName" })
  targetTableName: string;
}
