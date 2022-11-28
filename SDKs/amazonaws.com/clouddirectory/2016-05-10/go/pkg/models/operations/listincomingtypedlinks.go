package operations

import (
	"openapi/pkg/models/shared"
)

type ListIncomingTypedLinksHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type ListIncomingTypedLinksRequestBodyConsistencyLevelEnum string

const (
	ListIncomingTypedLinksRequestBodyConsistencyLevelEnumSerializable ListIncomingTypedLinksRequestBodyConsistencyLevelEnum = "SERIALIZABLE"
	ListIncomingTypedLinksRequestBodyConsistencyLevelEnumEventual     ListIncomingTypedLinksRequestBodyConsistencyLevelEnum = "EVENTUAL"
)

// ListIncomingTypedLinksRequestBodyFilterTypedLink
// Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
type ListIncomingTypedLinksRequestBodyFilterTypedLink struct {
	SchemaArn     *string `json:"SchemaArn,omitempty"`
	TypedLinkName *string `json:"TypedLinkName,omitempty"`
}

// ListIncomingTypedLinksRequestBodyObjectReference
// The reference that identifies an object.
type ListIncomingTypedLinksRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type ListIncomingTypedLinksRequestBody struct {
	ConsistencyLevel      *ListIncomingTypedLinksRequestBodyConsistencyLevelEnum `json:"ConsistencyLevel,omitempty"`
	FilterAttributeRanges []shared.TypedLinkAttributeRange                       `json:"FilterAttributeRanges,omitempty"`
	FilterTypedLink       *ListIncomingTypedLinksRequestBodyFilterTypedLink      `json:"FilterTypedLink,omitempty"`
	MaxResults            *int64                                                 `json:"MaxResults,omitempty"`
	NextToken             *string                                                `json:"NextToken,omitempty"`
	ObjectReference       ListIncomingTypedLinksRequestBodyObjectReference       `json:"ObjectReference"`
}

type ListIncomingTypedLinksRequest struct {
	Headers ListIncomingTypedLinksHeaders
	Request ListIncomingTypedLinksRequestBody `request:"mediaType=application/json"`
}

type ListIncomingTypedLinksResponse struct {
	AccessDeniedException          *shared.AccessDeniedException
	ContentType                    string
	DirectoryNotEnabledException   *shared.DirectoryNotEnabledException
	FacetValidationException       *shared.FacetValidationException
	InternalServiceException       *shared.InternalServiceException
	InvalidArnException            *shared.InvalidArnException
	InvalidNextTokenException      *shared.InvalidNextTokenException
	LimitExceededException         *shared.LimitExceededException
	ListIncomingTypedLinksResponse *shared.ListIncomingTypedLinksResponse
	ResourceNotFoundException      *shared.ResourceNotFoundException
	RetryableConflictException     *shared.RetryableConflictException
	StatusCode                     int64
	ValidationException            *shared.ValidationException
}
