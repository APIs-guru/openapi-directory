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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
