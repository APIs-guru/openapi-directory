package operations

type GetDescribeEnvironmentManagedActionsActionEnum string

const (
	GetDescribeEnvironmentManagedActionsActionEnumDescribeEnvironmentManagedActions GetDescribeEnvironmentManagedActionsActionEnum = "DescribeEnvironmentManagedActions"
)

type GetDescribeEnvironmentManagedActionsStatusEnum string

const (
	GetDescribeEnvironmentManagedActionsStatusEnumScheduled GetDescribeEnvironmentManagedActionsStatusEnum = "Scheduled"
	GetDescribeEnvironmentManagedActionsStatusEnumPending   GetDescribeEnvironmentManagedActionsStatusEnum = "Pending"
	GetDescribeEnvironmentManagedActionsStatusEnumRunning   GetDescribeEnvironmentManagedActionsStatusEnum = "Running"
	GetDescribeEnvironmentManagedActionsStatusEnumUnknown   GetDescribeEnvironmentManagedActionsStatusEnum = "Unknown"
)

type GetDescribeEnvironmentManagedActionsVersionEnum string

const (
	GetDescribeEnvironmentManagedActionsVersionEnumTwoThousandAndTen1201 GetDescribeEnvironmentManagedActionsVersionEnum = "2010-12-01"
)

type GetDescribeEnvironmentManagedActionsQueryParams struct {
	Action          GetDescribeEnvironmentManagedActionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EnvironmentID   *string                                         `queryParam:"style=form,explode=true,name=EnvironmentId"`
	EnvironmentName *string                                         `queryParam:"style=form,explode=true,name=EnvironmentName"`
	Status          *GetDescribeEnvironmentManagedActionsStatusEnum `queryParam:"style=form,explode=true,name=Status"`
	Version         GetDescribeEnvironmentManagedActionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeEnvironmentManagedActionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeEnvironmentManagedActionsRequest struct {
	QueryParams GetDescribeEnvironmentManagedActionsQueryParams
	Headers     GetDescribeEnvironmentManagedActionsHeaders
}

type GetDescribeEnvironmentManagedActionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
