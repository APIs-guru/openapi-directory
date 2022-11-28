import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration updates for an Amazon FSx for NetApp ONTAP file system.
**/
export declare class UpdateFileSystemOntapConfiguration extends SpeakeasyBase {
    automaticBackupRetentionDays?: number;
    dailyAutomaticBackupStartTime?: string;
    fsxAdminPassword?: string;
    weeklyMaintenanceStartTime?: string;
}
