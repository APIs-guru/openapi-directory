package operations

type PostDisableVgwRoutePropagationActionEnum string

const (
	PostDisableVgwRoutePropagationActionEnumDisableVgwRoutePropagation PostDisableVgwRoutePropagationActionEnum = "DisableVgwRoutePropagation"
)

type PostDisableVgwRoutePropagationVersionEnum string

const (
	PostDisableVgwRoutePropagationVersionEnumTwoThousandAndSixteen1115 PostDisableVgwRoutePropagationVersionEnum = "2016-11-15"
)

type PostDisableVgwRoutePropagationQueryParams struct {
	Action  PostDisableVgwRoutePropagationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisableVgwRoutePropagationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisableVgwRoutePropagationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDisableVgwRoutePropagationRequest struct {
	QueryParams PostDisableVgwRoutePropagationQueryParams
	Headers     PostDisableVgwRoutePropagationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisableVgwRoutePropagationResponse struct {
	ContentType string
	StatusCode  int64
}
