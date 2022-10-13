package operations

type GetDeleteVpcActionEnum string

const (
	GetDeleteVpcActionEnumDeleteVpc GetDeleteVpcActionEnum = "DeleteVpc"
)

type GetDeleteVpcVersionEnum string

const (
	GetDeleteVpcVersionEnumTwoThousandAndSixteen1115 GetDeleteVpcVersionEnum = "2016-11-15"
)

type GetDeleteVpcQueryParams struct {
	Action  GetDeleteVpcActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun  *bool                   `queryParam:"style=form,explode=true,name=DryRun"`
	Version GetDeleteVpcVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcID   string                  `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetDeleteVpcHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteVpcRequest struct {
	QueryParams GetDeleteVpcQueryParams
	Headers     GetDeleteVpcHeaders
}

type GetDeleteVpcResponse struct {
	ContentType string
	StatusCode  int64
}
