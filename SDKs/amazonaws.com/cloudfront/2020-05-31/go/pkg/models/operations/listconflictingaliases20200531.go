package operations

type ListConflictingAliases20200531QueryParams struct {
	Alias          string  `queryParam:"style=form,explode=true,name=Alias"`
	DistributionID string  `queryParam:"style=form,explode=true,name=DistributionId"`
	Marker         *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems       *int64  `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListConflictingAliases20200531Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListConflictingAliases20200531Request struct {
	QueryParams ListConflictingAliases20200531QueryParams
	Headers     ListConflictingAliases20200531Headers
}

type ListConflictingAliases20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
