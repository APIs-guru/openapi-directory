package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAssetPathParams struct {
	AssetID string `pathParam:"style=simple,explode=false,name=assetId"`
}

type DescribeAssetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeAssetRequest struct {
	PathParams DescribeAssetPathParams
	Headers    DescribeAssetHeaders
}

type DescribeAssetResponse struct {
	ContentType               string
	DescribeAssetResponse     *shared.DescribeAssetResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
