package operations

type PostDescribeAdjustmentTypesActionEnum string

const (
	PostDescribeAdjustmentTypesActionEnumDescribeAdjustmentTypes PostDescribeAdjustmentTypesActionEnum = "DescribeAdjustmentTypes"
)

type PostDescribeAdjustmentTypesVersionEnum string

const (
	PostDescribeAdjustmentTypesVersionEnumTwoThousandAndEleven0101 PostDescribeAdjustmentTypesVersionEnum = "2011-01-01"
)

type PostDescribeAdjustmentTypesQueryParams struct {
	Action  PostDescribeAdjustmentTypesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAdjustmentTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAdjustmentTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeAdjustmentTypesRequest struct {
	QueryParams PostDescribeAdjustmentTypesQueryParams
	Headers     PostDescribeAdjustmentTypesHeaders
}

type PostDescribeAdjustmentTypesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
