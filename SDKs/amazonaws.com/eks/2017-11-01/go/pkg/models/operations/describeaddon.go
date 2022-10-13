package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAddonPathParams struct {
	AddonName string `pathParam:"style=simple,explode=false,name=addonName"`
	Name      string `pathParam:"style=simple,explode=false,name=name"`
}

type DescribeAddonHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeAddonRequest struct {
	PathParams DescribeAddonPathParams
	Headers    DescribeAddonHeaders
}

type DescribeAddonResponse struct {
	ClientException           *interface{}
	ContentType               string
	DescribeAddonResponse     *shared.DescribeAddonResponse
	InvalidParameterException *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	ServerException           *interface{}
	StatusCode                int64
}
