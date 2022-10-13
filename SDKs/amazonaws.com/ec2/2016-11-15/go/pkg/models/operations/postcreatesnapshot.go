package operations

type PostCreateSnapshotActionEnum string

const (
	PostCreateSnapshotActionEnumCreateSnapshot PostCreateSnapshotActionEnum = "CreateSnapshot"
)

type PostCreateSnapshotVersionEnum string

const (
	PostCreateSnapshotVersionEnumTwoThousandAndSixteen1115 PostCreateSnapshotVersionEnum = "2016-11-15"
)

type PostCreateSnapshotQueryParams struct {
	Action  PostCreateSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateSnapshotRequest struct {
	QueryParams PostCreateSnapshotQueryParams
	Headers     PostCreateSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
