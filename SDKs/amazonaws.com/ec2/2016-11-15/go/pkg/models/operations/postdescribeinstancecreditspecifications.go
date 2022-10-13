package operations

type PostDescribeInstanceCreditSpecificationsActionEnum string

const (
	PostDescribeInstanceCreditSpecificationsActionEnumDescribeInstanceCreditSpecifications PostDescribeInstanceCreditSpecificationsActionEnum = "DescribeInstanceCreditSpecifications"
)

type PostDescribeInstanceCreditSpecificationsVersionEnum string

const (
	PostDescribeInstanceCreditSpecificationsVersionEnumTwoThousandAndSixteen1115 PostDescribeInstanceCreditSpecificationsVersionEnum = "2016-11-15"
)

type PostDescribeInstanceCreditSpecificationsQueryParams struct {
	Action     PostDescribeInstanceCreditSpecificationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                             `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                             `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeInstanceCreditSpecificationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeInstanceCreditSpecificationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeInstanceCreditSpecificationsRequest struct {
	QueryParams PostDescribeInstanceCreditSpecificationsQueryParams
	Headers     PostDescribeInstanceCreditSpecificationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeInstanceCreditSpecificationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
