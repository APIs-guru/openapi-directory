import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndex } from "./globalsecondaryindex";
import { LocalSecondaryIndex } from "./localsecondaryindex";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { SseSpecification } from "./ssespecification";


export class RestoreTableFromBackupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupArn" })
  backupArn: string;

  @Metadata({ data: "json, name=BillingModeOverride" })
  billingModeOverride?: BillingModeEnum;

  @Metadata({ data: "json, name=GlobalSecondaryIndexOverride", elemType: shared.GlobalSecondaryIndex })
  globalSecondaryIndexOverride?: GlobalSecondaryIndex[];

  @Metadata({ data: "json, name=LocalSecondaryIndexOverride", elemType: shared.LocalSecondaryIndex })
  localSecondaryIndexOverride?: LocalSecondaryIndex[];

  @Metadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: ProvisionedThroughput;

  @Metadata({ data: "json, name=SSESpecificationOverride" })
  sseSpecificationOverride?: SseSpecification;

  @Metadata({ data: "json, name=TargetTableName" })
  targetTableName: string;
}
