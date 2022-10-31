package operations

type PostAuthorizeSecurityGroupEgressActionEnum string

const (
	PostAuthorizeSecurityGroupEgressActionEnumAuthorizeSecurityGroupEgress PostAuthorizeSecurityGroupEgressActionEnum = "AuthorizeSecurityGroupEgress"
)

type PostAuthorizeSecurityGroupEgressVersionEnum string

const (
	PostAuthorizeSecurityGroupEgressVersionEnumTwoThousandAndSixteen1115 PostAuthorizeSecurityGroupEgressVersionEnum = "2016-11-15"
)

type PostAuthorizeSecurityGroupEgressQueryParams struct {
	Action  PostAuthorizeSecurityGroupEgressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAuthorizeSecurityGroupEgressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAuthorizeSecurityGroupEgressHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostAuthorizeSecurityGroupEgressRequest struct {
	QueryParams PostAuthorizeSecurityGroupEgressQueryParams
	Headers     PostAuthorizeSecurityGroupEgressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAuthorizeSecurityGroupEgressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
