package operations

import (
	"openapi/pkg/models/shared"
)

type StartLoggingXAmzTargetEnum string

const (
	StartLoggingXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101StartLogging StartLoggingXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging"
)

type StartLoggingHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartLoggingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartLoggingRequest struct {
	Headers StartLoggingHeaders
	Request shared.StartLoggingRequest `request:"mediaType=application/json"`
}

type StartLoggingResponse struct {
	ContentType                                            string
	InsufficientDependencyServiceAccessPermissionException *interface{}
	InvalidHomeRegionException                             *interface{}
	InvalidTrailNameException                              *interface{}
	NotOrganizationMasterAccountException                  *interface{}
	OperationNotPermittedException                         *interface{}
	StartLoggingResponse                                   map[string]interface{}
	StatusCode                                             int64
	TrailNotFoundException                                 *interface{}
	UnsupportedOperationException                          *interface{}
}
