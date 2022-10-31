package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeGlobalTableSettingsXAmzTargetEnum string

const (
	DescribeGlobalTableSettingsXAmzTargetEnumDynamoDb20120810DescribeGlobalTableSettings DescribeGlobalTableSettingsXAmzTargetEnum = "DynamoDB_20120810.DescribeGlobalTableSettings"
)

type DescribeGlobalTableSettingsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeGlobalTableSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeGlobalTableSettingsRequest struct {
	Headers DescribeGlobalTableSettingsHeaders
	Request shared.DescribeGlobalTableSettingsInput `request:"mediaType=application/json"`
}

type DescribeGlobalTableSettingsResponse struct {
	ContentType                       string
	DescribeGlobalTableSettingsOutput *shared.DescribeGlobalTableSettingsOutput
	GlobalTableNotFoundException      *interface{}
	InternalServerError               *interface{}
	StatusCode                        int64
}
