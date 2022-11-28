package operations

type GetModifyDbClusterActionEnum string

const (
	GetModifyDbClusterActionEnumModifyDbCluster GetModifyDbClusterActionEnum = "ModifyDBCluster"
)

// GetModifyDbClusterCloudwatchLogsExportConfiguration
// <p>The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the engine that is being used.</p>
type GetModifyDbClusterCloudwatchLogsExportConfiguration struct {
	DisableLogTypes []string `queryParam:"name=DisableLogTypes"`
	EnableLogTypes  []string `queryParam:"name=EnableLogTypes"`
}

type GetModifyDbClusterVersionEnum string

const (
	GetModifyDbClusterVersionEnumTwoThousandAndFourteen1031 GetModifyDbClusterVersionEnum = "2014-10-31"
)

type GetModifyDbClusterQueryParams struct {
	Action                            GetModifyDbClusterActionEnum                         `queryParam:"style=form,explode=true,name=Action"`
	ApplyImmediately                  *bool                                                `queryParam:"style=form,explode=true,name=ApplyImmediately"`
	BackupRetentionPeriod             *int64                                               `queryParam:"style=form,explode=true,name=BackupRetentionPeriod"`
	CloudwatchLogsExportConfiguration *GetModifyDbClusterCloudwatchLogsExportConfiguration `queryParam:"style=form,explode=true,name=CloudwatchLogsExportConfiguration"`
	DbClusterIdentifier               string                                               `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
	DbClusterParameterGroupName       *string                                              `queryParam:"style=form,explode=true,name=DBClusterParameterGroupName"`
	DeletionProtection                *bool                                                `queryParam:"style=form,explode=true,name=DeletionProtection"`
	EngineVersion                     *string                                              `queryParam:"style=form,explode=true,name=EngineVersion"`
	MasterUserPassword                *string                                              `queryParam:"style=form,explode=true,name=MasterUserPassword"`
	NewDbClusterIdentifier            *string                                              `queryParam:"style=form,explode=true,name=NewDBClusterIdentifier"`
	Port                              *int64                                               `queryParam:"style=form,explode=true,name=Port"`
	PreferredBackupWindow             *string                                              `queryParam:"style=form,explode=true,name=PreferredBackupWindow"`
	PreferredMaintenanceWindow        *string                                              `queryParam:"style=form,explode=true,name=PreferredMaintenanceWindow"`
	Version                           GetModifyDbClusterVersionEnum                        `queryParam:"style=form,explode=true,name=Version"`
	VpcSecurityGroupIds               []string                                             `queryParam:"style=form,explode=true,name=VpcSecurityGroupIds"`
}

type GetModifyDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyDbClusterRequest struct {
	QueryParams GetModifyDbClusterQueryParams
	Headers     GetModifyDbClusterHeaders
}

type GetModifyDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
