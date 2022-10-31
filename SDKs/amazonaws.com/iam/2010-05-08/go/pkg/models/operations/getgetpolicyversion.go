package operations

type GetGetPolicyVersionActionEnum string

const (
	GetGetPolicyVersionActionEnumGetPolicyVersion GetGetPolicyVersionActionEnum = "GetPolicyVersion"
)

type GetGetPolicyVersionVersionEnum string

const (
	GetGetPolicyVersionVersionEnumTwoThousandAndTen0508 GetGetPolicyVersionVersionEnum = "2010-05-08"
)

type GetGetPolicyVersionQueryParams struct {
	Action    GetGetPolicyVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyArn string                         `queryParam:"style=form,explode=true,name=PolicyArn"`
	Version   GetGetPolicyVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VersionID string                         `queryParam:"style=form,explode=true,name=VersionId"`
}

type GetGetPolicyVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetPolicyVersionRequest struct {
	QueryParams GetGetPolicyVersionQueryParams
	Headers     GetGetPolicyVersionHeaders
}

type GetGetPolicyVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
