package operations

type PostDisassociateTrunkInterfaceActionEnum string

const (
	PostDisassociateTrunkInterfaceActionEnumDisassociateTrunkInterface PostDisassociateTrunkInterfaceActionEnum = "DisassociateTrunkInterface"
)

type PostDisassociateTrunkInterfaceVersionEnum string

const (
	PostDisassociateTrunkInterfaceVersionEnumTwoThousandAndSixteen1115 PostDisassociateTrunkInterfaceVersionEnum = "2016-11-15"
)

type PostDisassociateTrunkInterfaceQueryParams struct {
	Action  PostDisassociateTrunkInterfaceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateTrunkInterfaceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateTrunkInterfaceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisassociateTrunkInterfaceRequest struct {
	QueryParams PostDisassociateTrunkInterfaceQueryParams
	Headers     PostDisassociateTrunkInterfaceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateTrunkInterfaceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
