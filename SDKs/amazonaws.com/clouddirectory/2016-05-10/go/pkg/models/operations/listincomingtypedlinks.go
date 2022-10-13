package operations

import (
	"openapi/pkg/models/shared"
)

type ListIncomingTypedLinksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type ListIncomingTypedLinksRequestBodyConsistencyLevelEnum string

const (
	ListIncomingTypedLinksRequestBodyConsistencyLevelEnumSerializable ListIncomingTypedLinksRequestBodyConsistencyLevelEnum = "SERIALIZABLE"
	ListIncomingTypedLinksRequestBodyConsistencyLevelEnumEventual     ListIncomingTypedLinksRequestBodyConsistencyLevelEnum = "EVENTUAL"
)

type ListIncomingTypedLinksRequestBodyFilterTypedLink struct {
	SchemaArn     *string `json:"SchemaArn"`
	TypedLinkName *string `json:"TypedLinkName"`
}

type ListIncomingTypedLinksRequestBodyObjectReference struct {
	Selector *string `json:"Selector"`
}

type ListIncomingTypedLinksRequestBody struct {
	ConsistencyLevel      *ListIncomingTypedLinksRequestBodyConsistencyLevelEnum `json:"ConsistencyLevel"`
	FilterAttributeRanges []shared.TypedLinkAttributeRange                       `json:"FilterAttributeRanges"`
	FilterTypedLink       *ListIncomingTypedLinksRequestBodyFilterTypedLink      `json:"FilterTypedLink"`
	MaxResults            *int64                                                 `json:"MaxResults"`
	NextToken             *string                                                `json:"NextToken"`
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
