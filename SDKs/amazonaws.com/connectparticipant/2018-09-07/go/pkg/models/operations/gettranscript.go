package operations

import (
	"openapi/pkg/models/shared"
)

type GetTranscriptQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetTranscriptHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzBearer        string  `header:"name=X-Amz-Bearer"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTranscriptRequestBodyScanDirectionEnum string

const (
	GetTranscriptRequestBodyScanDirectionEnumForward  GetTranscriptRequestBodyScanDirectionEnum = "FORWARD"
	GetTranscriptRequestBodyScanDirectionEnumBackward GetTranscriptRequestBodyScanDirectionEnum = "BACKWARD"
)

type GetTranscriptRequestBodySortOrderEnum string

const (
	GetTranscriptRequestBodySortOrderEnumDescending GetTranscriptRequestBodySortOrderEnum = "DESCENDING"
	GetTranscriptRequestBodySortOrderEnumAscending  GetTranscriptRequestBodySortOrderEnum = "ASCENDING"
)

type GetTranscriptRequestBodyStartPosition struct {
	AbsoluteTime *string `json:"AbsoluteTime"`
	ID           *string `json:"Id"`
	MostRecent   *int64  `json:"MostRecent"`
}

type GetTranscriptRequestBody struct {
	ContactID     *string                                    `json:"ContactId"`
	MaxResults    *int64                                     `json:"MaxResults"`
	NextToken     *string                                    `json:"NextToken"`
	ScanDirection *GetTranscriptRequestBodyScanDirectionEnum `json:"ScanDirection"`
	SortOrder     *GetTranscriptRequestBodySortOrderEnum     `json:"SortOrder"`
	StartPosition *GetTranscriptRequestBodyStartPosition     `json:"StartPosition"`
}

type GetTranscriptRequest struct {
	QueryParams GetTranscriptQueryParams
	Headers     GetTranscriptHeaders
	Request     GetTranscriptRequestBody `request:"mediaType=application/json"`
}

type GetTranscriptResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	GetTranscriptResponse   *shared.GetTranscriptResponse
	InternalServerException *interface{}
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
