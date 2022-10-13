package operations

type PostRevokeClientVpnIngressActionEnum string

const (
	PostRevokeClientVpnIngressActionEnumRevokeClientVpnIngress PostRevokeClientVpnIngressActionEnum = "RevokeClientVpnIngress"
)

type PostRevokeClientVpnIngressVersionEnum string

const (
	PostRevokeClientVpnIngressVersionEnumTwoThousandAndSixteen1115 PostRevokeClientVpnIngressVersionEnum = "2016-11-15"
)

type PostRevokeClientVpnIngressQueryParams struct {
	Action  PostRevokeClientVpnIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRevokeClientVpnIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRevokeClientVpnIngressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRevokeClientVpnIngressRequest struct {
	QueryParams PostRevokeClientVpnIngressQueryParams
	Headers     PostRevokeClientVpnIngressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRevokeClientVpnIngressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
