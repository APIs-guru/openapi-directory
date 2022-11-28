import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateFileSystemOntapConfiguration
/** 
 * The configuration updates for an Amazon FSx for NetApp ONTAP file system.
**/
export class UpdateFileSystemOntapConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=FsxAdminPassword" })
  fsxAdminPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
