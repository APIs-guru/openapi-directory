package operations

type ListInvalidations20180618PathParams struct {
	DistributionID string `pathParam:"style=simple,explode=false,name=DistributionId"`
}

type ListInvalidations20180618QueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListInvalidations20180618Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListInvalidations20180618Request struct {
	PathParams  ListInvalidations20180618PathParams
	QueryParams ListInvalidations20180618QueryParams
	Headers     ListInvalidations20180618Headers
}

type ListInvalidations20180618Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
