package operations

import (
	"openapi/pkg/models/shared"
)

type GetDescribeConfigurationSetActionEnum string

const (
	GetDescribeConfigurationSetActionEnumDescribeConfigurationSet GetDescribeConfigurationSetActionEnum = "DescribeConfigurationSet"
)

type GetDescribeConfigurationSetVersionEnum string

const (
	GetDescribeConfigurationSetVersionEnumTwoThousandAndTen1201 GetDescribeConfigurationSetVersionEnum = "2010-12-01"
)

type GetDescribeConfigurationSetQueryParams struct {
	Action                         GetDescribeConfigurationSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ConfigurationSetAttributeNames []shared.ConfigurationSetAttributeEnum `queryParam:"style=form,explode=true,name=ConfigurationSetAttributeNames"`
	ConfigurationSetName           string                                 `queryParam:"style=form,explode=true,name=ConfigurationSetName"`
	Version                        GetDescribeConfigurationSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeConfigurationSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeConfigurationSetRequest struct {
	QueryParams GetDescribeConfigurationSetQueryParams
	Headers     GetDescribeConfigurationSetHeaders
}

type GetDescribeConfigurationSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
