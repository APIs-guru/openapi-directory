package operations

type GetModifyEbsDefaultKmsKeyIDActionEnum string

const (
	GetModifyEbsDefaultKmsKeyIDActionEnumModifyEbsDefaultKmsKeyID GetModifyEbsDefaultKmsKeyIDActionEnum = "ModifyEbsDefaultKmsKeyId"
)

type GetModifyEbsDefaultKmsKeyIDVersionEnum string

const (
	GetModifyEbsDefaultKmsKeyIDVersionEnumTwoThousandAndSixteen1115 GetModifyEbsDefaultKmsKeyIDVersionEnum = "2016-11-15"
)

type GetModifyEbsDefaultKmsKeyIDQueryParams struct {
	Action   GetModifyEbsDefaultKmsKeyIDActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun   *bool                                  `queryParam:"style=form,explode=true,name=DryRun"`
	KmsKeyID string                                 `queryParam:"style=form,explode=true,name=KmsKeyId"`
	Version  GetModifyEbsDefaultKmsKeyIDVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyEbsDefaultKmsKeyIDHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyEbsDefaultKmsKeyIDRequest struct {
	QueryParams GetModifyEbsDefaultKmsKeyIDQueryParams
	Headers     GetModifyEbsDefaultKmsKeyIDHeaders
}

type GetModifyEbsDefaultKmsKeyIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
