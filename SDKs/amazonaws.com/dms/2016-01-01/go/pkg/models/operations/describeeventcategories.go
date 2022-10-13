package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEventCategoriesXAmzTargetEnum string

const (
	DescribeEventCategoriesXAmzTargetEnumAmazonDmSv20160101DescribeEventCategories DescribeEventCategoriesXAmzTargetEnum = "AmazonDMSv20160101.DescribeEventCategories"
)

type DescribeEventCategoriesHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEventCategoriesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEventCategoriesRequest struct {
	Headers DescribeEventCategoriesHeaders
	Request shared.DescribeEventCategoriesMessage `request:"mediaType=application/json"`
}

type DescribeEventCategoriesResponse struct {
	ContentType                     string
	DescribeEventCategoriesResponse *shared.DescribeEventCategoriesResponse
	StatusCode                      int64
}
