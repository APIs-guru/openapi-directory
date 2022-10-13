package operations

import (
	"openapi/pkg/models/shared"
)

type GetGetAccountAuthorizationDetailsActionEnum string

const (
	GetGetAccountAuthorizationDetailsActionEnumGetAccountAuthorizationDetails GetGetAccountAuthorizationDetailsActionEnum = "GetAccountAuthorizationDetails"
)

type GetGetAccountAuthorizationDetailsVersionEnum string

const (
	GetGetAccountAuthorizationDetailsVersionEnumTwoThousandAndTen0508 GetGetAccountAuthorizationDetailsVersionEnum = "2010-05-08"
)

type GetGetAccountAuthorizationDetailsQueryParams struct {
	Action   GetGetAccountAuthorizationDetailsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Filter   []shared.EntityTypeEnum                      `queryParam:"style=form,explode=true,name=Filter"`
	Marker   *string                                      `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64                                       `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  GetGetAccountAuthorizationDetailsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetAccountAuthorizationDetailsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetAccountAuthorizationDetailsRequest struct {
	QueryParams GetGetAccountAuthorizationDetailsQueryParams
	Headers     GetGetAccountAuthorizationDetailsHeaders
}

type GetGetAccountAuthorizationDetailsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
