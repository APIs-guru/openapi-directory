package operations

type CreateDistributionWithTags20181105QueryParams struct {
	WithTags bool `queryParam:"style=form,explode=true,name=WithTags"`
}

type CreateDistributionWithTags20181105Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDistributionWithTags20181105Request struct {
	QueryParams CreateDistributionWithTags20181105QueryParams
	Headers     CreateDistributionWithTags20181105Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type CreateDistributionWithTags20181105Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
