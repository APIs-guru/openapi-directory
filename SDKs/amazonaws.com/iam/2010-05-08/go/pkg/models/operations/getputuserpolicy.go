package operations

type GetPutUserPolicyActionEnum string

const (
	GetPutUserPolicyActionEnumPutUserPolicy GetPutUserPolicyActionEnum = "PutUserPolicy"
)

type GetPutUserPolicyVersionEnum string

const (
	GetPutUserPolicyVersionEnumTwoThousandAndTen0508 GetPutUserPolicyVersionEnum = "2010-05-08"
)

type GetPutUserPolicyQueryParams struct {
	Action         GetPutUserPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyDocument string                      `queryParam:"style=form,explode=true,name=PolicyDocument"`
	PolicyName     string                      `queryParam:"style=form,explode=true,name=PolicyName"`
	UserName       string                      `queryParam:"style=form,explode=true,name=UserName"`
	Version        GetPutUserPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPutUserPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetPutUserPolicyRequest struct {
	QueryParams GetPutUserPolicyQueryParams
	Headers     GetPutUserPolicyHeaders
}

type GetPutUserPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
