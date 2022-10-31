package operations

type PostCopySnapshotActionEnum string

const (
	PostCopySnapshotActionEnumCopySnapshot PostCopySnapshotActionEnum = "CopySnapshot"
)

type PostCopySnapshotVersionEnum string

const (
	PostCopySnapshotVersionEnumTwoThousandAndSixteen1115 PostCopySnapshotVersionEnum = "2016-11-15"
)

type PostCopySnapshotQueryParams struct {
	Action  PostCopySnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCopySnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCopySnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCopySnapshotRequest struct {
	QueryParams PostCopySnapshotQueryParams
	Headers     PostCopySnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCopySnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
