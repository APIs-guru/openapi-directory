package operations

type CreateDistributionWithTags20171030QueryParams struct {
	WithTags bool `queryParam:"style=form,explode=true,name=WithTags"`
}

type CreateDistributionWithTags20171030Headers struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateDistributionWithTags20171030Request struct {
	QueryParams CreateDistributionWithTags20171030QueryParams
	Headers     CreateDistributionWithTags20171030Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type CreateDistributionWithTags20171030Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
