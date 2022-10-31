package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeImagePermissionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeImagePermissionsXAmzTargetEnum string

const (
	DescribeImagePermissionsXAmzTargetEnumPhotonAdminProxyServiceDescribeImagePermissions DescribeImagePermissionsXAmzTargetEnum = "PhotonAdminProxyService.DescribeImagePermissions"
)

type DescribeImagePermissionsHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeImagePermissionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeImagePermissionsRequest struct {
	QueryParams DescribeImagePermissionsQueryParams
	Headers     DescribeImagePermissionsHeaders
	Request     shared.DescribeImagePermissionsRequest `request:"mediaType=application/json"`
}

type DescribeImagePermissionsResponse struct {
	ContentType                    string
	DescribeImagePermissionsResult *shared.DescribeImagePermissionsResult
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
