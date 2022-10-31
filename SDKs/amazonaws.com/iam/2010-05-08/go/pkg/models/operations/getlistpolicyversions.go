package operations

type GetListPolicyVersionsActionEnum string

const (
	GetListPolicyVersionsActionEnumListPolicyVersions GetListPolicyVersionsActionEnum = "ListPolicyVersions"
)

type GetListPolicyVersionsVersionEnum string

const (
	GetListPolicyVersionsVersionEnumTwoThousandAndTen0508 GetListPolicyVersionsVersionEnum = "2010-05-08"
)

type GetListPolicyVersionsQueryParams struct {
	Action    GetListPolicyVersionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker    *string                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems  *int64                           `queryParam:"style=form,explode=true,name=MaxItems"`
	PolicyArn string                           `queryParam:"style=form,explode=true,name=PolicyArn"`
	Version   GetListPolicyVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListPolicyVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListPolicyVersionsRequest struct {
	QueryParams GetListPolicyVersionsQueryParams
	Headers     GetListPolicyVersionsHeaders
}

type GetListPolicyVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
