package operations

type ListInvalidations20170325PathParams struct {
	DistributionID string `pathParam:"style=simple,explode=false,name=DistributionId"`
}

type ListInvalidations20170325QueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListInvalidations20170325Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListInvalidations20170325Request struct {
	PathParams  ListInvalidations20170325PathParams
	QueryParams ListInvalidations20170325QueryParams
	Headers     ListInvalidations20170325Headers
}

type ListInvalidations20170325Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
