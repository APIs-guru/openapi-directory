package operations

import (
	"openapi/pkg/models/shared"
)

type GetDescribeAccountAttributesActionEnum string

const (
	GetDescribeAccountAttributesActionEnumDescribeAccountAttributes GetDescribeAccountAttributesActionEnum = "DescribeAccountAttributes"
)

type GetDescribeAccountAttributesVersionEnum string

const (
	GetDescribeAccountAttributesVersionEnumTwoThousandAndSixteen1115 GetDescribeAccountAttributesVersionEnum = "2016-11-15"
)

type GetDescribeAccountAttributesQueryParams struct {
	Action        GetDescribeAccountAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AttributeName []shared.AccountAttributeNameEnum       `queryParam:"style=form,explode=true,name=AttributeName"`
	DryRun        *bool                                   `queryParam:"style=form,explode=true,name=DryRun"`
	Version       GetDescribeAccountAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeAccountAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeAccountAttributesRequest struct {
	QueryParams GetDescribeAccountAttributesQueryParams
	Headers     GetDescribeAccountAttributesHeaders
}

type GetDescribeAccountAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
