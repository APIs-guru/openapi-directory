package operations

type PostModifyEbsDefaultKmsKeyIDActionEnum string

const (
	PostModifyEbsDefaultKmsKeyIDActionEnumModifyEbsDefaultKmsKeyID PostModifyEbsDefaultKmsKeyIDActionEnum = "ModifyEbsDefaultKmsKeyId"
)

type PostModifyEbsDefaultKmsKeyIDVersionEnum string

const (
	PostModifyEbsDefaultKmsKeyIDVersionEnumTwoThousandAndSixteen1115 PostModifyEbsDefaultKmsKeyIDVersionEnum = "2016-11-15"
)

type PostModifyEbsDefaultKmsKeyIDQueryParams struct {
	Action  PostModifyEbsDefaultKmsKeyIDActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyEbsDefaultKmsKeyIDVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyEbsDefaultKmsKeyIDHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyEbsDefaultKmsKeyIDRequest struct {
	QueryParams PostModifyEbsDefaultKmsKeyIDQueryParams
	Headers     PostModifyEbsDefaultKmsKeyIDHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyEbsDefaultKmsKeyIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
