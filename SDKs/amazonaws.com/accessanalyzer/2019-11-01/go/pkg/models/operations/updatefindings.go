package operations

type UpdateFindingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateFindingsRequestBodyStatusEnum string

const (
	UpdateFindingsRequestBodyStatusEnumActive   UpdateFindingsRequestBodyStatusEnum = "ACTIVE"
	UpdateFindingsRequestBodyStatusEnumArchived UpdateFindingsRequestBodyStatusEnum = "ARCHIVED"
)

type UpdateFindingsRequestBody struct {
	AnalyzerArn string                              `json:"analyzerArn"`
	ClientToken *string                             `json:"clientToken"`
	Ids         []string                            `json:"ids"`
	ResourceArn *string                             `json:"resourceArn"`
	Status      UpdateFindingsRequestBodyStatusEnum `json:"status"`
}

type UpdateFindingsRequest struct {
	Headers UpdateFindingsHeaders
	Request UpdateFindingsRequestBody `request:"mediaType=application/json"`
}

type UpdateFindingsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
