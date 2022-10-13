package operations

type PostModifyDefaultCreditSpecificationActionEnum string

const (
	PostModifyDefaultCreditSpecificationActionEnumModifyDefaultCreditSpecification PostModifyDefaultCreditSpecificationActionEnum = "ModifyDefaultCreditSpecification"
)

type PostModifyDefaultCreditSpecificationVersionEnum string

const (
	PostModifyDefaultCreditSpecificationVersionEnumTwoThousandAndSixteen1115 PostModifyDefaultCreditSpecificationVersionEnum = "2016-11-15"
)

type PostModifyDefaultCreditSpecificationQueryParams struct {
	Action  PostModifyDefaultCreditSpecificationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyDefaultCreditSpecificationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyDefaultCreditSpecificationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyDefaultCreditSpecificationRequest struct {
	QueryParams PostModifyDefaultCreditSpecificationQueryParams
	Headers     PostModifyDefaultCreditSpecificationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyDefaultCreditSpecificationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
