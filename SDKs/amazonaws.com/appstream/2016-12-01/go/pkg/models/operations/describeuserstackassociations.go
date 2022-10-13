package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeUserStackAssociationsXAmzTargetEnum string

const (
	DescribeUserStackAssociationsXAmzTargetEnumPhotonAdminProxyServiceDescribeUserStackAssociations DescribeUserStackAssociationsXAmzTargetEnum = "PhotonAdminProxyService.DescribeUserStackAssociations"
)

type DescribeUserStackAssociationsHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeUserStackAssociationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeUserStackAssociationsRequest struct {
	Headers DescribeUserStackAssociationsHeaders
	Request shared.DescribeUserStackAssociationsRequest `request:"mediaType=application/json"`
}

type DescribeUserStackAssociationsResponse struct {
	ContentType                          string
	DescribeUserStackAssociationsResult  *shared.DescribeUserStackAssociationsResult
	InvalidParameterCombinationException *interface{}
	OperationNotPermittedException       *interface{}
	StatusCode                           int64
}
