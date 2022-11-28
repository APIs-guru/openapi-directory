import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyDbClusterActionEnum {
    ModifyDbCluster = "ModifyDBCluster"
}


// GetModifyDbClusterCloudwatchLogsExportConfiguration
/** 
 * <p>The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the engine that is being used.</p>
**/
export class GetModifyDbClusterCloudwatchLogsExportConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=DisableLogTypes" })
  disableLogTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, name=EnableLogTypes" })
  enableLogTypes?: string[];
}

export enum GetModifyDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyDbClusterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyDbClusterActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CloudwatchLogsExportConfiguration" })
  cloudwatchLogsExportConfiguration?: GetModifyDbClusterCloudwatchLogsExportConfiguration;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" })
  dbClusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterParameterGroupName" })
  dbClusterParameterGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeletionProtection" })
  deletionProtection?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MasterUserPassword" })
  masterUserPassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewDBClusterIdentifier" })
  newDbClusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyDbClusterVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}


export class GetModifyDbClusterHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetModifyDbClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyDbClusterQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyDbClusterHeaders;
}


export class GetModifyDbClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
