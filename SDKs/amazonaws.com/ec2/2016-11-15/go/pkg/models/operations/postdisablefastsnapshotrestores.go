package operations

type PostDisableFastSnapshotRestoresActionEnum string

const (
	PostDisableFastSnapshotRestoresActionEnumDisableFastSnapshotRestores PostDisableFastSnapshotRestoresActionEnum = "DisableFastSnapshotRestores"
)

type PostDisableFastSnapshotRestoresVersionEnum string

const (
	PostDisableFastSnapshotRestoresVersionEnumTwoThousandAndSixteen1115 PostDisableFastSnapshotRestoresVersionEnum = "2016-11-15"
)

type PostDisableFastSnapshotRestoresQueryParams struct {
	Action  PostDisableFastSnapshotRestoresActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisableFastSnapshotRestoresVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisableFastSnapshotRestoresHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDisableFastSnapshotRestoresRequest struct {
	QueryParams PostDisableFastSnapshotRestoresQueryParams
	Headers     PostDisableFastSnapshotRestoresHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisableFastSnapshotRestoresResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
