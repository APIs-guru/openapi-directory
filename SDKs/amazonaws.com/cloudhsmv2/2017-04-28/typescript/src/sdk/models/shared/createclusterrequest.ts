import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackupRetentionPolicy } from "./backupretentionpolicy";
import { Tag } from "./tag";


export class CreateClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupRetentionPolicy" })
  backupRetentionPolicy?: BackupRetentionPolicy;

  @Metadata({ data: "json, name=HsmType" })
  hsmType: string;

  @Metadata({ data: "json, name=SourceBackupId" })
  sourceBackupId?: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=TagList", elemType: shared.Tag })
  tagList?: Tag[];
}
