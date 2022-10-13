package operations

type PostAssociateInstanceEventWindowActionEnum string

const (
	PostAssociateInstanceEventWindowActionEnumAssociateInstanceEventWindow PostAssociateInstanceEventWindowActionEnum = "AssociateInstanceEventWindow"
)

type PostAssociateInstanceEventWindowVersionEnum string

const (
	PostAssociateInstanceEventWindowVersionEnumTwoThousandAndSixteen1115 PostAssociateInstanceEventWindowVersionEnum = "2016-11-15"
)

type PostAssociateInstanceEventWindowQueryParams struct {
	Action  PostAssociateInstanceEventWindowActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssociateInstanceEventWindowVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssociateInstanceEventWindowHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssociateInstanceEventWindowRequest struct {
	QueryParams PostAssociateInstanceEventWindowQueryParams
	Headers     PostAssociateInstanceEventWindowHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssociateInstanceEventWindowResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
