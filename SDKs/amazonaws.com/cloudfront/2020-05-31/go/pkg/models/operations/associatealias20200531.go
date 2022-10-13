package operations

type AssociateAlias20200531PathParams struct {
	TargetDistributionID string `pathParam:"style=simple,explode=false,name=TargetDistributionId"`
}

type AssociateAlias20200531QueryParams struct {
	Alias string `queryParam:"style=form,explode=true,name=Alias"`
}

type AssociateAlias20200531Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AssociateAlias20200531Request struct {
	PathParams  AssociateAlias20200531PathParams
	QueryParams AssociateAlias20200531QueryParams
	Headers     AssociateAlias20200531Headers
}

type AssociateAlias20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
