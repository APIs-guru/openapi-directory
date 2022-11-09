import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupRetentionPolicy } from "./backupretentionpolicy";
import { Tag } from "./tag";
export declare class CreateClusterRequest extends SpeakeasyBase {
    backupRetentionPolicy?: BackupRetentionPolicy;
    hsmType: string;
    sourceBackupId?: string;
    subnetIds: string[];
    tagList?: Tag[];
}
