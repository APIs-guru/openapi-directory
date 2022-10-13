package operations

type PostDeleteSnapshotActionEnum string

const (
	PostDeleteSnapshotActionEnumDeleteSnapshot PostDeleteSnapshotActionEnum = "DeleteSnapshot"
)

type PostDeleteSnapshotVersionEnum string

const (
	PostDeleteSnapshotVersionEnumTwoThousandAndSixteen1115 PostDeleteSnapshotVersionEnum = "2016-11-15"
)

type PostDeleteSnapshotQueryParams struct {
	Action  PostDeleteSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteSnapshotRequest struct {
	QueryParams PostDeleteSnapshotQueryParams
	Headers     PostDeleteSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteSnapshotResponse struct {
	ContentType string
	StatusCode  int64
}
