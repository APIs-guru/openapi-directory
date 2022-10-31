package operations

type GetDetachUserPolicyActionEnum string

const (
	GetDetachUserPolicyActionEnumDetachUserPolicy GetDetachUserPolicyActionEnum = "DetachUserPolicy"
)

type GetDetachUserPolicyVersionEnum string

const (
	GetDetachUserPolicyVersionEnumTwoThousandAndTen0508 GetDetachUserPolicyVersionEnum = "2010-05-08"
)

type GetDetachUserPolicyQueryParams struct {
	Action    GetDetachUserPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyArn string                         `queryParam:"style=form,explode=true,name=PolicyArn"`
	UserName  string                         `queryParam:"style=form,explode=true,name=UserName"`
	Version   GetDetachUserPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDetachUserPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDetachUserPolicyRequest struct {
	QueryParams GetDetachUserPolicyQueryParams
	Headers     GetDetachUserPolicyHeaders
}

type GetDetachUserPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
