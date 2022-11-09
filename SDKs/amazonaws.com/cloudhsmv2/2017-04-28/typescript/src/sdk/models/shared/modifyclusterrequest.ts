import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupRetentionPolicy } from "./backupretentionpolicy";


export class ModifyClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupRetentionPolicy" })
  backupRetentionPolicy: BackupRetentionPolicy;

  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
