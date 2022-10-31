package operations

type GetUpdateServiceSpecificCredentialActionEnum string

const (
	GetUpdateServiceSpecificCredentialActionEnumUpdateServiceSpecificCredential GetUpdateServiceSpecificCredentialActionEnum = "UpdateServiceSpecificCredential"
)

type GetUpdateServiceSpecificCredentialStatusEnum string

const (
	GetUpdateServiceSpecificCredentialStatusEnumActive   GetUpdateServiceSpecificCredentialStatusEnum = "Active"
	GetUpdateServiceSpecificCredentialStatusEnumInactive GetUpdateServiceSpecificCredentialStatusEnum = "Inactive"
)

type GetUpdateServiceSpecificCredentialVersionEnum string

const (
	GetUpdateServiceSpecificCredentialVersionEnumTwoThousandAndTen0508 GetUpdateServiceSpecificCredentialVersionEnum = "2010-05-08"
)

type GetUpdateServiceSpecificCredentialQueryParams struct {
	Action                      GetUpdateServiceSpecificCredentialActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ServiceSpecificCredentialID string                                        `queryParam:"style=form,explode=true,name=ServiceSpecificCredentialId"`
	Status                      GetUpdateServiceSpecificCredentialStatusEnum  `queryParam:"style=form,explode=true,name=Status"`
	UserName                    *string                                       `queryParam:"style=form,explode=true,name=UserName"`
	Version                     GetUpdateServiceSpecificCredentialVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateServiceSpecificCredentialHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetUpdateServiceSpecificCredentialRequest struct {
	QueryParams GetUpdateServiceSpecificCredentialQueryParams
	Headers     GetUpdateServiceSpecificCredentialHeaders
}

type GetUpdateServiceSpecificCredentialResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
