package operations

type PostResetEbsDefaultKmsKeyIDActionEnum string

const (
	PostResetEbsDefaultKmsKeyIDActionEnumResetEbsDefaultKmsKeyID PostResetEbsDefaultKmsKeyIDActionEnum = "ResetEbsDefaultKmsKeyId"
)

type PostResetEbsDefaultKmsKeyIDVersionEnum string

const (
	PostResetEbsDefaultKmsKeyIDVersionEnumTwoThousandAndSixteen1115 PostResetEbsDefaultKmsKeyIDVersionEnum = "2016-11-15"
)

type PostResetEbsDefaultKmsKeyIDQueryParams struct {
	Action  PostResetEbsDefaultKmsKeyIDActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResetEbsDefaultKmsKeyIDVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResetEbsDefaultKmsKeyIDHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostResetEbsDefaultKmsKeyIDRequest struct {
	QueryParams PostResetEbsDefaultKmsKeyIDQueryParams
	Headers     PostResetEbsDefaultKmsKeyIDHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResetEbsDefaultKmsKeyIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
