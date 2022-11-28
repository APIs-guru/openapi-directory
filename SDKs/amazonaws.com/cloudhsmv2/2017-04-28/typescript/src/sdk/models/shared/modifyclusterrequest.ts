import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupRetentionPolicy } from "./backupretentionpolicy";



export class ModifyClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupRetentionPolicy" })
  backupRetentionPolicy: BackupRetentionPolicy;

  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
