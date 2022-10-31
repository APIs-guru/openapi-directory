package operations

type PostEnableEbsEncryptionByDefaultActionEnum string

const (
	PostEnableEbsEncryptionByDefaultActionEnumEnableEbsEncryptionByDefault PostEnableEbsEncryptionByDefaultActionEnum = "EnableEbsEncryptionByDefault"
)

type PostEnableEbsEncryptionByDefaultVersionEnum string

const (
	PostEnableEbsEncryptionByDefaultVersionEnumTwoThousandAndSixteen1115 PostEnableEbsEncryptionByDefaultVersionEnum = "2016-11-15"
)

type PostEnableEbsEncryptionByDefaultQueryParams struct {
	Action  PostEnableEbsEncryptionByDefaultActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostEnableEbsEncryptionByDefaultVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostEnableEbsEncryptionByDefaultHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostEnableEbsEncryptionByDefaultRequest struct {
	QueryParams PostEnableEbsEncryptionByDefaultQueryParams
	Headers     PostEnableEbsEncryptionByDefaultHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostEnableEbsEncryptionByDefaultResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
