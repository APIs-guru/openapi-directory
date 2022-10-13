package operations

type PostDisassociateInstanceEventWindowActionEnum string

const (
	PostDisassociateInstanceEventWindowActionEnumDisassociateInstanceEventWindow PostDisassociateInstanceEventWindowActionEnum = "DisassociateInstanceEventWindow"
)

type PostDisassociateInstanceEventWindowVersionEnum string

const (
	PostDisassociateInstanceEventWindowVersionEnumTwoThousandAndSixteen1115 PostDisassociateInstanceEventWindowVersionEnum = "2016-11-15"
)

type PostDisassociateInstanceEventWindowQueryParams struct {
	Action  PostDisassociateInstanceEventWindowActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateInstanceEventWindowVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateInstanceEventWindowHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisassociateInstanceEventWindowRequest struct {
	QueryParams PostDisassociateInstanceEventWindowQueryParams
	Headers     PostDisassociateInstanceEventWindowHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateInstanceEventWindowResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
