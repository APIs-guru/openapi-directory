package operations

type GetGetEbsDefaultKmsKeyIDActionEnum string

const (
	GetGetEbsDefaultKmsKeyIDActionEnumGetEbsDefaultKmsKeyID GetGetEbsDefaultKmsKeyIDActionEnum = "GetEbsDefaultKmsKeyId"
)

type GetGetEbsDefaultKmsKeyIDVersionEnum string

const (
	GetGetEbsDefaultKmsKeyIDVersionEnumTwoThousandAndSixteen1115 GetGetEbsDefaultKmsKeyIDVersionEnum = "2016-11-15"
)

type GetGetEbsDefaultKmsKeyIDQueryParams struct {
	Action  GetGetEbsDefaultKmsKeyIDActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun  *bool                               `queryParam:"style=form,explode=true,name=DryRun"`
	Version GetGetEbsDefaultKmsKeyIDVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetEbsDefaultKmsKeyIDHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetEbsDefaultKmsKeyIDRequest struct {
	QueryParams GetGetEbsDefaultKmsKeyIDQueryParams
	Headers     GetGetEbsDefaultKmsKeyIDHeaders
}

type GetGetEbsDefaultKmsKeyIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
