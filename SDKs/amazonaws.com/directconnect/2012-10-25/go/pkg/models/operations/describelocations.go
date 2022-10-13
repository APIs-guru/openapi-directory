package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLocationsXAmzTargetEnum string

const (
	DescribeLocationsXAmzTargetEnumOvertureServiceDescribeLocations DescribeLocationsXAmzTargetEnum = "OvertureService.DescribeLocations"
)

type DescribeLocationsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLocationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLocationsRequest struct {
	Headers DescribeLocationsHeaders
}

type DescribeLocationsResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	Locations                    *shared.Locations
	StatusCode                   int64
}
