package operations

type GetDeletePolicyVersionActionEnum string

const (
	GetDeletePolicyVersionActionEnumDeletePolicyVersion GetDeletePolicyVersionActionEnum = "DeletePolicyVersion"
)

type GetDeletePolicyVersionVersionEnum string

const (
	GetDeletePolicyVersionVersionEnumTwoThousandAndTen0508 GetDeletePolicyVersionVersionEnum = "2010-05-08"
)

type GetDeletePolicyVersionQueryParams struct {
	Action    GetDeletePolicyVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyArn string                            `queryParam:"style=form,explode=true,name=PolicyArn"`
	Version   GetDeletePolicyVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VersionID string                            `queryParam:"style=form,explode=true,name=VersionId"`
}

type GetDeletePolicyVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeletePolicyVersionRequest struct {
	QueryParams GetDeletePolicyVersionQueryParams
	Headers     GetDeletePolicyVersionHeaders
}

type GetDeletePolicyVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
