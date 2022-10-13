package operations

import (
	"openapi/pkg/models/shared"
)

type StopLoggingXAmzTargetEnum string

const (
	StopLoggingXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101StopLogging StopLoggingXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging"
)

type StopLoggingHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopLoggingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopLoggingRequest struct {
	Headers StopLoggingHeaders
	Request shared.StopLoggingRequest `request:"mediaType=application/json"`
}

type StopLoggingResponse struct {
	ContentType                                            string
	InsufficientDependencyServiceAccessPermissionException *interface{}
	InvalidHomeRegionException                             *interface{}
	InvalidTrailNameException                              *interface{}
	NotOrganizationMasterAccountException                  *interface{}
	OperationNotPermittedException                         *interface{}
	StatusCode                                             int64
	StopLoggingResponse                                    map[string]interface{}
	TrailNotFoundException                                 *interface{}
	UnsupportedOperationException                          *interface{}
}
