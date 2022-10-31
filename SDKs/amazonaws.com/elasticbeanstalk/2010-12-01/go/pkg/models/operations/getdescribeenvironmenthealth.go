package operations

import (
	"openapi/pkg/models/shared"
)

type GetDescribeEnvironmentHealthActionEnum string

const (
	GetDescribeEnvironmentHealthActionEnumDescribeEnvironmentHealth GetDescribeEnvironmentHealthActionEnum = "DescribeEnvironmentHealth"
)

type GetDescribeEnvironmentHealthVersionEnum string

const (
	GetDescribeEnvironmentHealthVersionEnumTwoThousandAndTen1201 GetDescribeEnvironmentHealthVersionEnum = "2010-12-01"
)

type GetDescribeEnvironmentHealthQueryParams struct {
	Action          GetDescribeEnvironmentHealthActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AttributeNames  []shared.EnvironmentHealthAttributeEnum `queryParam:"style=form,explode=true,name=AttributeNames"`
	EnvironmentID   *string                                 `queryParam:"style=form,explode=true,name=EnvironmentId"`
	EnvironmentName *string                                 `queryParam:"style=form,explode=true,name=EnvironmentName"`
	Version         GetDescribeEnvironmentHealthVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeEnvironmentHealthHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeEnvironmentHealthRequest struct {
	QueryParams GetDescribeEnvironmentHealthQueryParams
	Headers     GetDescribeEnvironmentHealthHeaders
}

type GetDescribeEnvironmentHealthResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
