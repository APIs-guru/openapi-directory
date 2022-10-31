package operations

type GetCreatePolicyVersionActionEnum string

const (
	GetCreatePolicyVersionActionEnumCreatePolicyVersion GetCreatePolicyVersionActionEnum = "CreatePolicyVersion"
)

type GetCreatePolicyVersionVersionEnum string

const (
	GetCreatePolicyVersionVersionEnumTwoThousandAndTen0508 GetCreatePolicyVersionVersionEnum = "2010-05-08"
)

type GetCreatePolicyVersionQueryParams struct {
	Action         GetCreatePolicyVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyArn      string                            `queryParam:"style=form,explode=true,name=PolicyArn"`
	PolicyDocument string                            `queryParam:"style=form,explode=true,name=PolicyDocument"`
	SetAsDefault   *bool                             `queryParam:"style=form,explode=true,name=SetAsDefault"`
	Version        GetCreatePolicyVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreatePolicyVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCreatePolicyVersionRequest struct {
	QueryParams GetCreatePolicyVersionQueryParams
	Headers     GetCreatePolicyVersionHeaders
}

type GetCreatePolicyVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
