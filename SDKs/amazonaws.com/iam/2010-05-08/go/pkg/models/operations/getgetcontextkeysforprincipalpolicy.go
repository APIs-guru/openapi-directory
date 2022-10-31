package operations

type GetGetContextKeysForPrincipalPolicyActionEnum string

const (
	GetGetContextKeysForPrincipalPolicyActionEnumGetContextKeysForPrincipalPolicy GetGetContextKeysForPrincipalPolicyActionEnum = "GetContextKeysForPrincipalPolicy"
)

type GetGetContextKeysForPrincipalPolicyVersionEnum string

const (
	GetGetContextKeysForPrincipalPolicyVersionEnumTwoThousandAndTen0508 GetGetContextKeysForPrincipalPolicyVersionEnum = "2010-05-08"
)

type GetGetContextKeysForPrincipalPolicyQueryParams struct {
	Action          GetGetContextKeysForPrincipalPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyInputList []string                                       `queryParam:"style=form,explode=true,name=PolicyInputList"`
	PolicySourceArn string                                         `queryParam:"style=form,explode=true,name=PolicySourceArn"`
	Version         GetGetContextKeysForPrincipalPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetContextKeysForPrincipalPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetContextKeysForPrincipalPolicyRequest struct {
	QueryParams GetGetContextKeysForPrincipalPolicyQueryParams
	Headers     GetGetContextKeysForPrincipalPolicyHeaders
}

type GetGetContextKeysForPrincipalPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
