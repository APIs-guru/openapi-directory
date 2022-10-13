package operations

type PostBundleInstanceActionEnum string

const (
	PostBundleInstanceActionEnumBundleInstance PostBundleInstanceActionEnum = "BundleInstance"
)

type PostBundleInstanceVersionEnum string

const (
	PostBundleInstanceVersionEnumTwoThousandAndSixteen1115 PostBundleInstanceVersionEnum = "2016-11-15"
)

type PostBundleInstanceQueryParams struct {
	Action  PostBundleInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostBundleInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostBundleInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostBundleInstanceRequest struct {
	QueryParams PostBundleInstanceQueryParams
	Headers     PostBundleInstanceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostBundleInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
