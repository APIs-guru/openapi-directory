import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupRetentionPolicy } from "./backupretentionpolicy";
import { Tag } from "./tag";



export class CreateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupRetentionPolicy" })
  backupRetentionPolicy?: BackupRetentionPolicy;

  @SpeakeasyMetadata({ data: "json, name=HsmType" })
  hsmType: string;

  @SpeakeasyMetadata({ data: "json, name=SourceBackupId" })
  sourceBackupId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=TagList", elemType: Tag })
  tagList?: Tag[];
}
