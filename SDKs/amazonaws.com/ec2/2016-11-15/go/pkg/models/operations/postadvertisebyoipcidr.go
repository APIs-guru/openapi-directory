package operations

type PostAdvertiseByoipCidrActionEnum string

const (
	PostAdvertiseByoipCidrActionEnumAdvertiseByoipCidr PostAdvertiseByoipCidrActionEnum = "AdvertiseByoipCidr"
)

type PostAdvertiseByoipCidrVersionEnum string

const (
	PostAdvertiseByoipCidrVersionEnumTwoThousandAndSixteen1115 PostAdvertiseByoipCidrVersionEnum = "2016-11-15"
)

type PostAdvertiseByoipCidrQueryParams struct {
	Action  PostAdvertiseByoipCidrActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAdvertiseByoipCidrVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAdvertiseByoipCidrHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAdvertiseByoipCidrRequest struct {
	QueryParams PostAdvertiseByoipCidrQueryParams
	Headers     PostAdvertiseByoipCidrHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAdvertiseByoipCidrResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
