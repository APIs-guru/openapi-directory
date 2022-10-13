package operations

type PostImportSnapshotActionEnum string

const (
	PostImportSnapshotActionEnumImportSnapshot PostImportSnapshotActionEnum = "ImportSnapshot"
)

type PostImportSnapshotVersionEnum string

const (
	PostImportSnapshotVersionEnumTwoThousandAndSixteen1115 PostImportSnapshotVersionEnum = "2016-11-15"
)

type PostImportSnapshotQueryParams struct {
	Action  PostImportSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostImportSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostImportSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostImportSnapshotRequest struct {
	QueryParams PostImportSnapshotQueryParams
	Headers     PostImportSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostImportSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
