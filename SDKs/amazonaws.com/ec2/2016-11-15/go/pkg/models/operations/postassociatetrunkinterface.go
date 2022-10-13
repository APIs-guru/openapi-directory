package operations

type PostAssociateTrunkInterfaceActionEnum string

const (
	PostAssociateTrunkInterfaceActionEnumAssociateTrunkInterface PostAssociateTrunkInterfaceActionEnum = "AssociateTrunkInterface"
)

type PostAssociateTrunkInterfaceVersionEnum string

const (
	PostAssociateTrunkInterfaceVersionEnumTwoThousandAndSixteen1115 PostAssociateTrunkInterfaceVersionEnum = "2016-11-15"
)

type PostAssociateTrunkInterfaceQueryParams struct {
	Action  PostAssociateTrunkInterfaceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssociateTrunkInterfaceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssociateTrunkInterfaceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssociateTrunkInterfaceRequest struct {
	QueryParams PostAssociateTrunkInterfaceQueryParams
	Headers     PostAssociateTrunkInterfaceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssociateTrunkInterfaceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
