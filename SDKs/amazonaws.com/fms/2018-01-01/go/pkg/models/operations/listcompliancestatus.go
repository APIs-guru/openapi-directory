package operations

import (
	"openapi/pkg/models/shared"
)

type ListComplianceStatusQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListComplianceStatusXAmzTargetEnum string

const (
	ListComplianceStatusXAmzTargetEnumAwsfms20180101ListComplianceStatus ListComplianceStatusXAmzTargetEnum = "AWSFMS_20180101.ListComplianceStatus"
)

type ListComplianceStatusHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListComplianceStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListComplianceStatusRequest struct {
	QueryParams ListComplianceStatusQueryParams
	Headers     ListComplianceStatusHeaders
	Request     shared.ListComplianceStatusRequest `request:"mediaType=application/json"`
}

type ListComplianceStatusResponse struct {
	ContentType                  string
	InternalErrorException       *interface{}
	ListComplianceStatusResponse *shared.ListComplianceStatusResponse
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
