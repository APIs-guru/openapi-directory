package operations

type GetEnableEbsEncryptionByDefaultActionEnum string

const (
	GetEnableEbsEncryptionByDefaultActionEnumEnableEbsEncryptionByDefault GetEnableEbsEncryptionByDefaultActionEnum = "EnableEbsEncryptionByDefault"
)

type GetEnableEbsEncryptionByDefaultVersionEnum string

const (
	GetEnableEbsEncryptionByDefaultVersionEnumTwoThousandAndSixteen1115 GetEnableEbsEncryptionByDefaultVersionEnum = "2016-11-15"
)

type GetEnableEbsEncryptionByDefaultQueryParams struct {
	Action  GetEnableEbsEncryptionByDefaultActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun  *bool                                      `queryParam:"style=form,explode=true,name=DryRun"`
	Version GetEnableEbsEncryptionByDefaultVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetEnableEbsEncryptionByDefaultHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEnableEbsEncryptionByDefaultRequest struct {
	QueryParams GetEnableEbsEncryptionByDefaultQueryParams
	Headers     GetEnableEbsEncryptionByDefaultHeaders
}

type GetEnableEbsEncryptionByDefaultResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
