package operations

type PostProvisionByoipCidrActionEnum string

const (
	PostProvisionByoipCidrActionEnumProvisionByoipCidr PostProvisionByoipCidrActionEnum = "ProvisionByoipCidr"
)

type PostProvisionByoipCidrVersionEnum string

const (
	PostProvisionByoipCidrVersionEnumTwoThousandAndSixteen1115 PostProvisionByoipCidrVersionEnum = "2016-11-15"
)

type PostProvisionByoipCidrQueryParams struct {
	Action  PostProvisionByoipCidrActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostProvisionByoipCidrVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostProvisionByoipCidrHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostProvisionByoipCidrRequest struct {
	QueryParams PostProvisionByoipCidrQueryParams
	Headers     PostProvisionByoipCidrHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostProvisionByoipCidrResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
