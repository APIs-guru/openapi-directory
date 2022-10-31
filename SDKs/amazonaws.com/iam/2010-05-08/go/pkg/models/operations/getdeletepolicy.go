package operations

type GetDeletePolicyActionEnum string

const (
	GetDeletePolicyActionEnumDeletePolicy GetDeletePolicyActionEnum = "DeletePolicy"
)

type GetDeletePolicyVersionEnum string

const (
	GetDeletePolicyVersionEnumTwoThousandAndTen0508 GetDeletePolicyVersionEnum = "2010-05-08"
)

type GetDeletePolicyQueryParams struct {
	Action    GetDeletePolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyArn string                     `queryParam:"style=form,explode=true,name=PolicyArn"`
	Version   GetDeletePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeletePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeletePolicyRequest struct {
	QueryParams GetDeletePolicyQueryParams
	Headers     GetDeletePolicyHeaders
}

type GetDeletePolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
