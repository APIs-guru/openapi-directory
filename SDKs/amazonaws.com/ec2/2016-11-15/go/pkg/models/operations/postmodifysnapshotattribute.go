package operations

type PostModifySnapshotAttributeActionEnum string

const (
	PostModifySnapshotAttributeActionEnumModifySnapshotAttribute PostModifySnapshotAttributeActionEnum = "ModifySnapshotAttribute"
)

type PostModifySnapshotAttributeVersionEnum string

const (
	PostModifySnapshotAttributeVersionEnumTwoThousandAndSixteen1115 PostModifySnapshotAttributeVersionEnum = "2016-11-15"
)

type PostModifySnapshotAttributeQueryParams struct {
	Action  PostModifySnapshotAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifySnapshotAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifySnapshotAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifySnapshotAttributeRequest struct {
	QueryParams PostModifySnapshotAttributeQueryParams
	Headers     PostModifySnapshotAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifySnapshotAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
