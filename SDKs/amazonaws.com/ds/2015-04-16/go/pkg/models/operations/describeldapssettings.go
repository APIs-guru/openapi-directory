package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLdapsSettingsXAmzTargetEnum string

const (
	DescribeLdapsSettingsXAmzTargetEnumDirectoryService20150416DescribeLdapsSettings DescribeLdapsSettingsXAmzTargetEnum = "DirectoryService_20150416.DescribeLDAPSSettings"
)

type DescribeLdapsSettingsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLdapsSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLdapsSettingsRequest struct {
	Headers DescribeLdapsSettingsHeaders
	Request shared.DescribeLdapsSettingsRequest `request:"mediaType=application/json"`
}

type DescribeLdapsSettingsResponse struct {
	ClientException                *interface{}
	ContentType                    string
	DescribeLdapsSettingsResult    *shared.DescribeLdapsSettingsResult
	DirectoryDoesNotExistException *interface{}
	InvalidNextTokenException      *interface{}
	InvalidParameterException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	UnsupportedOperationException  *interface{}
}
