import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyDbClusterActionEnum {
    ModifyDbCluster = "ModifyDBCluster"
}
/**
 * <p>The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the engine that is being used.</p>
**/
export declare class GetModifyDbClusterCloudwatchLogsExportConfiguration extends SpeakeasyBase {
    disableLogTypes?: string[];
    enableLogTypes?: string[];
}
export declare enum GetModifyDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetModifyDbClusterQueryParams extends SpeakeasyBase {
    action: GetModifyDbClusterActionEnum;
    applyImmediately?: boolean;
    backupRetentionPeriod?: number;
    cloudwatchLogsExportConfiguration?: GetModifyDbClusterCloudwatchLogsExportConfiguration;
    dbClusterIdentifier: string;
    dbClusterParameterGroupName?: string;
    deletionProtection?: boolean;
    engineVersion?: string;
    masterUserPassword?: string;
    newDbClusterIdentifier?: string;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    version: GetModifyDbClusterVersionEnum;
    vpcSecurityGroupIds?: string[];
}
export declare class GetModifyDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyDbClusterRequest extends SpeakeasyBase {
    queryParams: GetModifyDbClusterQueryParams;
    headers: GetModifyDbClusterHeaders;
}
export declare class GetModifyDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
