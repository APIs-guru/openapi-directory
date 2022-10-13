package operations

type PostModifyInstanceCreditSpecificationActionEnum string

const (
	PostModifyInstanceCreditSpecificationActionEnumModifyInstanceCreditSpecification PostModifyInstanceCreditSpecificationActionEnum = "ModifyInstanceCreditSpecification"
)

type PostModifyInstanceCreditSpecificationVersionEnum string

const (
	PostModifyInstanceCreditSpecificationVersionEnumTwoThousandAndSixteen1115 PostModifyInstanceCreditSpecificationVersionEnum = "2016-11-15"
)

type PostModifyInstanceCreditSpecificationQueryParams struct {
	Action  PostModifyInstanceCreditSpecificationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyInstanceCreditSpecificationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyInstanceCreditSpecificationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyInstanceCreditSpecificationRequest struct {
	QueryParams PostModifyInstanceCreditSpecificationQueryParams
	Headers     PostModifyInstanceCreditSpecificationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyInstanceCreditSpecificationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
