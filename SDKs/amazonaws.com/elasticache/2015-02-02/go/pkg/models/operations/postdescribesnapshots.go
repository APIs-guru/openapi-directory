package operations

type PostDescribeSnapshotsActionEnum string

const (
	PostDescribeSnapshotsActionEnumDescribeSnapshots PostDescribeSnapshotsActionEnum = "DescribeSnapshots"
)

type PostDescribeSnapshotsVersionEnum string

const (
	PostDescribeSnapshotsVersionEnumTwoThousandAndFifteen0202 PostDescribeSnapshotsVersionEnum = "2015-02-02"
)

type PostDescribeSnapshotsQueryParams struct {
	Action     PostDescribeSnapshotsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                          `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeSnapshotsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeSnapshotsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeSnapshotsRequest struct {
	QueryParams PostDescribeSnapshotsQueryParams
	Headers     PostDescribeSnapshotsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeSnapshotsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
