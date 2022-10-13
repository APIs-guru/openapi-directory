package operations

type PostDescribeSnapshotAttributeActionEnum string

const (
	PostDescribeSnapshotAttributeActionEnumDescribeSnapshotAttribute PostDescribeSnapshotAttributeActionEnum = "DescribeSnapshotAttribute"
)

type PostDescribeSnapshotAttributeVersionEnum string

const (
	PostDescribeSnapshotAttributeVersionEnumTwoThousandAndSixteen1115 PostDescribeSnapshotAttributeVersionEnum = "2016-11-15"
)

type PostDescribeSnapshotAttributeQueryParams struct {
	Action  PostDescribeSnapshotAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeSnapshotAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeSnapshotAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeSnapshotAttributeRequest struct {
	QueryParams PostDescribeSnapshotAttributeQueryParams
	Headers     PostDescribeSnapshotAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeSnapshotAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
