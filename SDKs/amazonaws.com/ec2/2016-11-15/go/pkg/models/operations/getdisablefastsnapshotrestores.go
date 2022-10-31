package operations

type GetDisableFastSnapshotRestoresActionEnum string

const (
	GetDisableFastSnapshotRestoresActionEnumDisableFastSnapshotRestores GetDisableFastSnapshotRestoresActionEnum = "DisableFastSnapshotRestores"
)

type GetDisableFastSnapshotRestoresVersionEnum string

const (
	GetDisableFastSnapshotRestoresVersionEnumTwoThousandAndSixteen1115 GetDisableFastSnapshotRestoresVersionEnum = "2016-11-15"
)

type GetDisableFastSnapshotRestoresQueryParams struct {
	Action           GetDisableFastSnapshotRestoresActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AvailabilityZone []string                                  `queryParam:"style=form,explode=true,name=AvailabilityZone"`
	DryRun           *bool                                     `queryParam:"style=form,explode=true,name=DryRun"`
	SourceSnapshotID []string                                  `queryParam:"style=form,explode=true,name=SourceSnapshotId"`
	Version          GetDisableFastSnapshotRestoresVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisableFastSnapshotRestoresHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDisableFastSnapshotRestoresRequest struct {
	QueryParams GetDisableFastSnapshotRestoresQueryParams
	Headers     GetDisableFastSnapshotRestoresHeaders
}

type GetDisableFastSnapshotRestoresResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
