package operations

import (
	"openapi/pkg/models/shared"
)

type AddTagsXAmzTargetEnum string

const (
	AddTagsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101AddTags AddTagsXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags"
)

type AddTagsHeaders struct {
	XAmzAlgorithm     *string               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AddTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AddTagsRequest struct {
	Headers AddTagsHeaders
	Request shared.AddTagsRequest `request:"mediaType=application/json"`
}

type AddTagsResponse struct {
	AddTagsResponse                       map[string]interface{}
	CloudTrailArnInvalidException         *interface{}
	ContentType                           string
	InvalidTagParameterException          *interface{}
	InvalidTrailNameException             *interface{}
	NotOrganizationMasterAccountException *interface{}
	OperationNotPermittedException        *interface{}
	ResourceNotFoundException             *interface{}
	ResourceTypeNotSupportedException     *interface{}
	StatusCode                            int64
	TagsLimitExceededException            *interface{}
	UnsupportedOperationException         *interface{}
}
