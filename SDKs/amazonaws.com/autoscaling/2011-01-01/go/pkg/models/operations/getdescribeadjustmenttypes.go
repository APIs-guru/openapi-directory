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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
