package operations

type PostGetAccountAuthorizationDetailsActionEnum string

const (
	PostGetAccountAuthorizationDetailsActionEnumGetAccountAuthorizationDetails PostGetAccountAuthorizationDetailsActionEnum = "GetAccountAuthorizationDetails"
)

type PostGetAccountAuthorizationDetailsVersionEnum string

const (
	PostGetAccountAuthorizationDetailsVersionEnumTwoThousandAndTen0508 PostGetAccountAuthorizationDetailsVersionEnum = "2010-05-08"
)

type PostGetAccountAuthorizationDetailsQueryParams struct {
	Action   PostGetAccountAuthorizationDetailsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                                       `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                                       `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostGetAccountAuthorizationDetailsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetAccountAuthorizationDetailsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetAccountAuthorizationDetailsRequest struct {
	QueryParams PostGetAccountAuthorizationDetailsQueryParams
	Headers     PostGetAccountAuthorizationDetailsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetAccountAuthorizationDetailsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
