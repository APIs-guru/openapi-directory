package operations

type PostCreateSnapshotsActionEnum string

const (
	PostCreateSnapshotsActionEnumCreateSnapshots PostCreateSnapshotsActionEnum = "CreateSnapshots"
)

type PostCreateSnapshotsVersionEnum string

const (
	PostCreateSnapshotsVersionEnumTwoThousandAndSixteen1115 PostCreateSnapshotsVersionEnum = "2016-11-15"
)

type PostCreateSnapshotsQueryParams struct {
	Action  PostCreateSnapshotsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateSnapshotsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateSnapshotsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateSnapshotsRequest struct {
	QueryParams PostCreateSnapshotsQueryParams
	Headers     PostCreateSnapshotsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateSnapshotsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
