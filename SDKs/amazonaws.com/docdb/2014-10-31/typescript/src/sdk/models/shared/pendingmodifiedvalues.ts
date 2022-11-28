import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingCloudwatchLogsExports } from "./pendingcloudwatchlogsexports";



// PendingModifiedValues
/** 
 *  One or more modified settings for an instance. These modified settings have been requested, but haven't been applied yet.
**/
export class PendingModifiedValues extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  caCertificateIdentifier?: string;

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  dbSubnetGroupName?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  masterUserPassword?: string;

  @SpeakeasyMetadata()
  multiAz?: boolean;

  @SpeakeasyMetadata()
  pendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  storageType?: string;
}
