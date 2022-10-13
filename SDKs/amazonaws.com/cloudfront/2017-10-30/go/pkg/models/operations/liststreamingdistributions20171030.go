package operations

type ListStreamingDistributions20171030QueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListStreamingDistributions20171030Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListStreamingDistributions20171030Request struct {
	QueryParams ListStreamingDistributions20171030QueryParams
	Headers     ListStreamingDistributions20171030Headers
}

type ListStreamingDistributions20171030Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
