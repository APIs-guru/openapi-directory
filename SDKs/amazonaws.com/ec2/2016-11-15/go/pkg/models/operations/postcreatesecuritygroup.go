package operations

type PostCreateSecurityGroupActionEnum string

const (
	PostCreateSecurityGroupActionEnumCreateSecurityGroup PostCreateSecurityGroupActionEnum = "CreateSecurityGroup"
)

type PostCreateSecurityGroupVersionEnum string

const (
	PostCreateSecurityGroupVersionEnumTwoThousandAndSixteen1115 PostCreateSecurityGroupVersionEnum = "2016-11-15"
)

type PostCreateSecurityGroupQueryParams struct {
	Action  PostCreateSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateSecurityGroupRequest struct {
	QueryParams PostCreateSecurityGroupQueryParams
	Headers     PostCreateSecurityGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateSecurityGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
