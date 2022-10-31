package operations

type PostResetSnapshotAttributeActionEnum string

const (
	PostResetSnapshotAttributeActionEnumResetSnapshotAttribute PostResetSnapshotAttributeActionEnum = "ResetSnapshotAttribute"
)

type PostResetSnapshotAttributeVersionEnum string

const (
	PostResetSnapshotAttributeVersionEnumTwoThousandAndSixteen1115 PostResetSnapshotAttributeVersionEnum = "2016-11-15"
)

type PostResetSnapshotAttributeQueryParams struct {
	Action  PostResetSnapshotAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResetSnapshotAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResetSnapshotAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostResetSnapshotAttributeRequest struct {
	QueryParams PostResetSnapshotAttributeQueryParams
	Headers     PostResetSnapshotAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResetSnapshotAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
