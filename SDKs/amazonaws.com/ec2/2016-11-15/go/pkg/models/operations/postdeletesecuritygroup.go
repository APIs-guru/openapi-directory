package operations

type PostDeleteSecurityGroupActionEnum string

const (
	PostDeleteSecurityGroupActionEnumDeleteSecurityGroup PostDeleteSecurityGroupActionEnum = "DeleteSecurityGroup"
)

type PostDeleteSecurityGroupVersionEnum string

const (
	PostDeleteSecurityGroupVersionEnumTwoThousandAndSixteen1115 PostDeleteSecurityGroupVersionEnum = "2016-11-15"
)

type PostDeleteSecurityGroupQueryParams struct {
	Action  PostDeleteSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteSecurityGroupRequest struct {
	QueryParams PostDeleteSecurityGroupQueryParams
	Headers     PostDeleteSecurityGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteSecurityGroupResponse struct {
	ContentType string
	StatusCode  int64
}
