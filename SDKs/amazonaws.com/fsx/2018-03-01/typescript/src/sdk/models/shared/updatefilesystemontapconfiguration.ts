import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateFileSystemOntapConfiguration
/** 
 * The configuration updates for an Amazon FSx for NetApp ONTAP file system.
**/
export class UpdateFileSystemOntapConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @Metadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @Metadata({ data: "json, name=FsxAdminPassword" })
  fsxAdminPassword?: string;

  @Metadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
