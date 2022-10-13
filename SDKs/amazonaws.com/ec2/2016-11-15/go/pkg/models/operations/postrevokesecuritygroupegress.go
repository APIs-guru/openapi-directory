package operations

type PostRevokeSecurityGroupEgressActionEnum string

const (
	PostRevokeSecurityGroupEgressActionEnumRevokeSecurityGroupEgress PostRevokeSecurityGroupEgressActionEnum = "RevokeSecurityGroupEgress"
)

type PostRevokeSecurityGroupEgressVersionEnum string

const (
	PostRevokeSecurityGroupEgressVersionEnumTwoThousandAndSixteen1115 PostRevokeSecurityGroupEgressVersionEnum = "2016-11-15"
)

type PostRevokeSecurityGroupEgressQueryParams struct {
	Action  PostRevokeSecurityGroupEgressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRevokeSecurityGroupEgressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRevokeSecurityGroupEgressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRevokeSecurityGroupEgressRequest struct {
	QueryParams PostRevokeSecurityGroupEgressQueryParams
	Headers     PostRevokeSecurityGroupEgressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRevokeSecurityGroupEgressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
