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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
