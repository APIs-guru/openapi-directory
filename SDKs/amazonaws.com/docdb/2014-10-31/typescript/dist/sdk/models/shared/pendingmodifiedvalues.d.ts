import { SpeakeasyBase } from "../../../internal/utils";
import { PendingCloudwatchLogsExports } from "./pendingcloudwatchlogsexports";
/**
 *  One or more modified settings for an instance. These modified settings have been requested, but haven't been applied yet.
**/
export declare class PendingModifiedValues extends SpeakeasyBase {
    allocatedStorage?: number;
    backupRetentionPeriod?: number;
    caCertificateIdentifier?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier?: string;
    dbSubnetGroupName?: string;
    engineVersion?: string;
    iops?: number;
    licenseModel?: string;
    masterUserPassword?: string;
    multiAz?: boolean;
    pendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
    port?: number;
    storageType?: string;
}
