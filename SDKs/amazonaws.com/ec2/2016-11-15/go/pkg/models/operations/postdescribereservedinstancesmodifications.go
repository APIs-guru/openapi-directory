package operations

type PostDescribeReservedInstancesModificationsActionEnum string

const (
	PostDescribeReservedInstancesModificationsActionEnumDescribeReservedInstancesModifications PostDescribeReservedInstancesModificationsActionEnum = "DescribeReservedInstancesModifications"
)

type PostDescribeReservedInstancesModificationsVersionEnum string

const (
	PostDescribeReservedInstancesModificationsVersionEnumTwoThousandAndSixteen1115 PostDescribeReservedInstancesModificationsVersionEnum = "2016-11-15"
)

type PostDescribeReservedInstancesModificationsQueryParams struct {
	Action    PostDescribeReservedInstancesModificationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	NextToken *string                                               `queryParam:"style=form,explode=true,name=NextToken"`
	Version   PostDescribeReservedInstancesModificationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeReservedInstancesModificationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeReservedInstancesModificationsRequest struct {
	QueryParams PostDescribeReservedInstancesModificationsQueryParams
	Headers     PostDescribeReservedInstancesModificationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeReservedInstancesModificationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
