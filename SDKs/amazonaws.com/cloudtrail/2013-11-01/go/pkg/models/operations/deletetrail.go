package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTrailXAmzTargetEnum string

const (
	DeleteTrailXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteTrail DeleteTrailXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail"
)

type DeleteTrailHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTrailXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteTrailRequest struct {
	Headers DeleteTrailHeaders
	Request shared.DeleteTrailRequest `request:"mediaType=application/json"`
}

type DeleteTrailResponse struct {
	ConflictException                                      *interface{}
	ContentType                                            string
	DeleteTrailResponse                                    map[string]interface{}
	InsufficientDependencyServiceAccessPermissionException *interface{}
	InvalidHomeRegionException                             *interface{}
	InvalidTrailNameException                              *interface{}
	NotOrganizationMasterAccountException                  *interface{}
	OperationNotPermittedException                         *interface{}
	StatusCode                                             int64
	TrailNotFoundException                                 *interface{}
	UnsupportedOperationException                          *interface{}
}
