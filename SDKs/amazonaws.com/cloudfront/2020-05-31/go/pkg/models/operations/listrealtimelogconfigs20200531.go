package operations

type ListRealtimeLogConfigs20200531QueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListRealtimeLogConfigs20200531Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListRealtimeLogConfigs20200531Request struct {
	QueryParams ListRealtimeLogConfigs20200531QueryParams
	Headers     ListRealtimeLogConfigs20200531Headers
}

type ListRealtimeLogConfigs20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
