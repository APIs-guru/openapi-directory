package operations

import (
	"openapi/pkg/models/shared"
)

type ListOutgoingTypedLinksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum string

const (
	ListOutgoingTypedLinksRequestBodyConsistencyLevelEnumSerializable ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum = "SERIALIZABLE"
	ListOutgoingTypedLinksRequestBodyConsistencyLevelEnumEventual     ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum = "EVENTUAL"
)

type ListOutgoingTypedLinksRequestBodyFilterTypedLink struct {
	SchemaArn     *string `json:"SchemaArn"`
	TypedLinkName *string `json:"TypedLinkName"`
}

type ListOutgoingTypedLinksRequestBodyObjectReference struct {
	Selector *string `json:"Selector"`
}

type ListOutgoingTypedLinksRequestBody struct {
	ConsistencyLevel      *ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum `json:"ConsistencyLevel"`
	FilterAttributeRanges []shared.TypedLinkAttributeRange                       `json:"FilterAttributeRanges"`
	FilterTypedLink       *ListOutgoingTypedLinksRequestBodyFilterTypedLink      `json:"FilterTypedLink"`
	MaxResults            *int64                                                 `json:"MaxResults"`
	NextToken             *string                                                `json:"NextToken"`
	ObjectReference       ListOutgoingTypedLinksRequestBodyObjectReference       `json:"ObjectReference"`
}

type ListOutgoingTypedLinksRequest struct {
	Headers ListOutgoingTypedLinksHeaders
	Request ListOutgoingTypedLinksRequestBody `request:"mediaType=application/json"`
}

type ListOutgoingTypedLinksResponse struct {
	AccessDeniedException          *shared.AccessDeniedException
	ContentType                    string
	DirectoryNotEnabledException   *shared.DirectoryNotEnabledException
	FacetValidationException       *shared.FacetValidationException
	InternalServiceException       *shared.InternalServiceException
	InvalidArnException            *shared.InvalidArnException
	InvalidNextTokenException      *shared.InvalidNextTokenException
	LimitExceededException         *shared.LimitExceededException
	ListOutgoingTypedLinksResponse *shared.ListOutgoingTypedLinksResponse
	ResourceNotFoundException      *shared.ResourceNotFoundException
	RetryableConflictException     *shared.RetryableConflictException
	StatusCode                     int64
	ValidationException            *shared.ValidationException
}
