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

type ListIncomingTypedLinksRequestBodyFilterTypedLink struct {
	SchemaArn     *string `json:"SchemaArn,omitempty"`
	TypedLinkName *string `json:"TypedLinkName,omitempty"`
}

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
	AccessDeniedException          *interface{}
	ContentType                    string
	DirectoryNotEnabledException   *interface{}
	FacetValidationException       *interface{}
	InternalServiceException       *interface{}
	InvalidArnException            *interface{}
	InvalidNextTokenException      *interface{}
	LimitExceededException         *interface{}
	ListIncomingTypedLinksResponse *shared.ListIncomingTypedLinksResponse
	ResourceNotFoundException      *interface{}
	RetryableConflictException     *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
