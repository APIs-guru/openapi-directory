package operations

import (
	"openapi/pkg/models/shared"
)

type ListPublicKeysQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPublicKeysXAmzTargetEnum string

const (
	ListPublicKeysXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101ListPublicKeys ListPublicKeysXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys"
)

type ListPublicKeysHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPublicKeysXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPublicKeysRequest struct {
	QueryParams ListPublicKeysQueryParams
	Headers     ListPublicKeysHeaders
	Request     shared.ListPublicKeysRequest `request:"mediaType=application/json"`
}

type ListPublicKeysResponse struct {
	ContentType                    string
	InvalidTimeRangeException      *interface{}
	InvalidTokenException          *interface{}
	ListPublicKeysResponse         *shared.ListPublicKeysResponse
	OperationNotPermittedException *interface{}
	StatusCode                     int64
	UnsupportedOperationException  *interface{}
}
