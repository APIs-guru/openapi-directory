package operations

type GetDescribeAdjustmentTypesActionEnum string

const (
	GetDescribeAdjustmentTypesActionEnumDescribeAdjustmentTypes GetDescribeAdjustmentTypesActionEnum = "DescribeAdjustmentTypes"
)

type GetDescribeAdjustmentTypesVersionEnum string

const (
	GetDescribeAdjustmentTypesVersionEnumTwoThousandAndEleven0101 GetDescribeAdjustmentTypesVersionEnum = "2011-01-01"
)

type GetDescribeAdjustmentTypesQueryParams struct {
	Action  GetDescribeAdjustmentTypesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetDescribeAdjustmentTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeAdjustmentTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeAdjustmentTypesRequest struct {
	QueryParams GetDescribeAdjustmentTypesQueryParams
	Headers     GetDescribeAdjustmentTypesHeaders
}

type GetDescribeAdjustmentTypesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
