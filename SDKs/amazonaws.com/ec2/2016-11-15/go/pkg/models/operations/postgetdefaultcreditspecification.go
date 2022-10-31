package operations

type PostGetDefaultCreditSpecificationActionEnum string

const (
	PostGetDefaultCreditSpecificationActionEnumGetDefaultCreditSpecification PostGetDefaultCreditSpecificationActionEnum = "GetDefaultCreditSpecification"
)

type PostGetDefaultCreditSpecificationVersionEnum string

const (
	PostGetDefaultCreditSpecificationVersionEnumTwoThousandAndSixteen1115 PostGetDefaultCreditSpecificationVersionEnum = "2016-11-15"
)

type PostGetDefaultCreditSpecificationQueryParams struct {
	Action  PostGetDefaultCreditSpecificationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetDefaultCreditSpecificationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetDefaultCreditSpecificationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetDefaultCreditSpecificationRequest struct {
	QueryParams PostGetDefaultCreditSpecificationQueryParams
	Headers     PostGetDefaultCreditSpecificationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetDefaultCreditSpecificationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
