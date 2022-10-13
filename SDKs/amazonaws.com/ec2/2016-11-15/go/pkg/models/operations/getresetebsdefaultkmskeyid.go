package operations

type GetResetEbsDefaultKmsKeyIDActionEnum string

const (
	GetResetEbsDefaultKmsKeyIDActionEnumResetEbsDefaultKmsKeyID GetResetEbsDefaultKmsKeyIDActionEnum = "ResetEbsDefaultKmsKeyId"
)

type GetResetEbsDefaultKmsKeyIDVersionEnum string

const (
	GetResetEbsDefaultKmsKeyIDVersionEnumTwoThousandAndSixteen1115 GetResetEbsDefaultKmsKeyIDVersionEnum = "2016-11-15"
)

type GetResetEbsDefaultKmsKeyIDQueryParams struct {
	Action  GetResetEbsDefaultKmsKeyIDActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun  *bool                                 `queryParam:"style=form,explode=true,name=DryRun"`
	Version GetResetEbsDefaultKmsKeyIDVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetResetEbsDefaultKmsKeyIDHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetResetEbsDefaultKmsKeyIDRequest struct {
	QueryParams GetResetEbsDefaultKmsKeyIDQueryParams
	Headers     GetResetEbsDefaultKmsKeyIDHeaders
}

type GetResetEbsDefaultKmsKeyIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
