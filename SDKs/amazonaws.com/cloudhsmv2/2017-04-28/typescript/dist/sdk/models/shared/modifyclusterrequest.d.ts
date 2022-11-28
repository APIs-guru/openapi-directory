import { SpeakeasyBase } from "../../../internal/utils";
import { BackupRetentionPolicy } from "./backupretentionpolicy";
export declare class ModifyClusterRequest extends SpeakeasyBase {
    backupRetentionPolicy: BackupRetentionPolicy;
    clusterId: string;
}
