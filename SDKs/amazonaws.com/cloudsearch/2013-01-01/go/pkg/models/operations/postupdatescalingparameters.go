package operations

type PostUpdateScalingParametersActionEnum string

const (
	PostUpdateScalingParametersActionEnumUpdateScalingParameters PostUpdateScalingParametersActionEnum = "UpdateScalingParameters"
)

type PostUpdateScalingParametersVersionEnum string

const (
	PostUpdateScalingParametersVersionEnumTwoThousandAndThirteen0101 PostUpdateScalingParametersVersionEnum = "2013-01-01"
)

type PostUpdateScalingParametersQueryParams struct {
	Action  PostUpdateScalingParametersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateScalingParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateScalingParametersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostUpdateScalingParametersRequest struct {
	QueryParams PostUpdateScalingParametersQueryParams
	Headers     PostUpdateScalingParametersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateScalingParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
