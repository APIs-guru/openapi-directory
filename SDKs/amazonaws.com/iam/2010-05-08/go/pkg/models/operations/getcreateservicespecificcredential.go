package operations

type GetCreateServiceSpecificCredentialActionEnum string

const (
	GetCreateServiceSpecificCredentialActionEnumCreateServiceSpecificCredential GetCreateServiceSpecificCredentialActionEnum = "CreateServiceSpecificCredential"
)

type GetCreateServiceSpecificCredentialVersionEnum string

const (
	GetCreateServiceSpecificCredentialVersionEnumTwoThousandAndTen0508 GetCreateServiceSpecificCredentialVersionEnum = "2010-05-08"
)

type GetCreateServiceSpecificCredentialQueryParams struct {
	Action      GetCreateServiceSpecificCredentialActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ServiceName string                                        `queryParam:"style=form,explode=true,name=ServiceName"`
	UserName    string                                        `queryParam:"style=form,explode=true,name=UserName"`
	Version     GetCreateServiceSpecificCredentialVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateServiceSpecificCredentialHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateServiceSpecificCredentialRequest struct {
	QueryParams GetCreateServiceSpecificCredentialQueryParams
	Headers     GetCreateServiceSpecificCredentialHeaders
}

type GetCreateServiceSpecificCredentialResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
