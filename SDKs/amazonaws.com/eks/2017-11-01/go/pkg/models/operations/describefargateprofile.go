package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFargateProfilePathParams struct {
	FargateProfileName string `pathParam:"style=simple,explode=false,name=fargateProfileName"`
	Name               string `pathParam:"style=simple,explode=false,name=name"`
}

type DescribeFargateProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeFargateProfileRequest struct {
	PathParams DescribeFargateProfilePathParams
	Headers    DescribeFargateProfileHeaders
}

type DescribeFargateProfileResponse struct {
	ClientException                *interface{}
	ContentType                    string
	DescribeFargateProfileResponse *shared.DescribeFargateProfileResponse
	InvalidParameterException      *interface{}
	ResourceNotFoundException      *interface{}
	ServerException                *interface{}
	StatusCode                     int64
}
