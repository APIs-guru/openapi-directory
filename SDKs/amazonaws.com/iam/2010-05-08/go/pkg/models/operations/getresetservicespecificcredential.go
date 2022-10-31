package operations

type GetResetServiceSpecificCredentialActionEnum string

const (
	GetResetServiceSpecificCredentialActionEnumResetServiceSpecificCredential GetResetServiceSpecificCredentialActionEnum = "ResetServiceSpecificCredential"
)

type GetResetServiceSpecificCredentialVersionEnum string

const (
	GetResetServiceSpecificCredentialVersionEnumTwoThousandAndTen0508 GetResetServiceSpecificCredentialVersionEnum = "2010-05-08"
)

type GetResetServiceSpecificCredentialQueryParams struct {
	Action                      GetResetServiceSpecificCredentialActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ServiceSpecificCredentialID string                                       `queryParam:"style=form,explode=true,name=ServiceSpecificCredentialId"`
	UserName                    *string                                      `queryParam:"style=form,explode=true,name=UserName"`
	Version                     GetResetServiceSpecificCredentialVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetResetServiceSpecificCredentialHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetResetServiceSpecificCredentialRequest struct {
	QueryParams GetResetServiceSpecificCredentialQueryParams
	Headers     GetResetServiceSpecificCredentialHeaders
}

type GetResetServiceSpecificCredentialResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
