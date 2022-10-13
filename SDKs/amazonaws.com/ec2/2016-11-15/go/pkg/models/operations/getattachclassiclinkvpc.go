package operations

type GetAttachClassicLinkVpcActionEnum string

const (
	GetAttachClassicLinkVpcActionEnumAttachClassicLinkVpc GetAttachClassicLinkVpcActionEnum = "AttachClassicLinkVpc"
)

type GetAttachClassicLinkVpcVersionEnum string

const (
	GetAttachClassicLinkVpcVersionEnumTwoThousandAndSixteen1115 GetAttachClassicLinkVpcVersionEnum = "2016-11-15"
)

type GetAttachClassicLinkVpcQueryParams struct {
	Action          GetAttachClassicLinkVpcActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun          *bool                              `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID      string                             `queryParam:"style=form,explode=true,name=InstanceId"`
	SecurityGroupID []string                           `queryParam:"style=form,explode=true,name=SecurityGroupId"`
	Version         GetAttachClassicLinkVpcVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcID           string                             `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetAttachClassicLinkVpcHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAttachClassicLinkVpcRequest struct {
	QueryParams GetAttachClassicLinkVpcQueryParams
	Headers     GetAttachClassicLinkVpcHeaders
}

type GetAttachClassicLinkVpcResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
