package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeClientAuthenticationSettingsXAmzTargetEnum string

const (
	DescribeClientAuthenticationSettingsXAmzTargetEnumDirectoryService20150416DescribeClientAuthenticationSettings DescribeClientAuthenticationSettingsXAmzTargetEnum = "DirectoryService_20150416.DescribeClientAuthenticationSettings"
)

type DescribeClientAuthenticationSettingsHeaders struct {
	XAmzAlgorithm     *string                                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeClientAuthenticationSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeClientAuthenticationSettingsRequest struct {
	Headers DescribeClientAuthenticationSettingsHeaders
	Request shared.DescribeClientAuthenticationSettingsRequest `request:"mediaType=application/json"`
}

type DescribeClientAuthenticationSettingsResponse struct {
	AccessDeniedException                      *interface{}
	ClientException                            *interface{}
	ContentType                                string
	DescribeClientAuthenticationSettingsResult *shared.DescribeClientAuthenticationSettingsResult
	DirectoryDoesNotExistException             *interface{}
	InvalidParameterException                  *interface{}
	ServiceException                           *interface{}
	StatusCode                                 int64
	UnsupportedOperationException              *interface{}
}
