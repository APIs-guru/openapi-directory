package operations

type CreateDistributionWithTags20170325QueryParams struct {
	WithTags bool `queryParam:"style=form,explode=true,name=WithTags"`
}

type CreateDistributionWithTags20170325Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDistributionWithTags20170325Request struct {
	QueryParams CreateDistributionWithTags20170325QueryParams
	Headers     CreateDistributionWithTags20170325Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type CreateDistributionWithTags20170325Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
