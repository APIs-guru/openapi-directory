package operations

type PostListServiceSpecificCredentialsActionEnum string

const (
	PostListServiceSpecificCredentialsActionEnumListServiceSpecificCredentials PostListServiceSpecificCredentialsActionEnum = "ListServiceSpecificCredentials"
)

type PostListServiceSpecificCredentialsVersionEnum string

const (
	PostListServiceSpecificCredentialsVersionEnumTwoThousandAndTen0508 PostListServiceSpecificCredentialsVersionEnum = "2010-05-08"
)

type PostListServiceSpecificCredentialsQueryParams struct {
	Action  PostListServiceSpecificCredentialsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListServiceSpecificCredentialsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListServiceSpecificCredentialsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListServiceSpecificCredentialsRequest struct {
	QueryParams PostListServiceSpecificCredentialsQueryParams
	Headers     PostListServiceSpecificCredentialsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListServiceSpecificCredentialsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
