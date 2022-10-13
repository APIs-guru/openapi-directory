package operations

type GetDescribeEngineDefaultParametersActionEnum string

const (
	GetDescribeEngineDefaultParametersActionEnumDescribeEngineDefaultParameters GetDescribeEngineDefaultParametersActionEnum = "DescribeEngineDefaultParameters"
)

type GetDescribeEngineDefaultParametersVersionEnum string

const (
	GetDescribeEngineDefaultParametersVersionEnumTwoThousandAndFifteen0202 GetDescribeEngineDefaultParametersVersionEnum = "2015-02-02"
)

type GetDescribeEngineDefaultParametersQueryParams struct {
	Action                    GetDescribeEngineDefaultParametersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CacheParameterGroupFamily string                                        `queryParam:"style=form,explode=true,name=CacheParameterGroupFamily"`
	Marker                    *string                                       `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords                *int64                                        `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version                   GetDescribeEngineDefaultParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeEngineDefaultParametersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeEngineDefaultParametersRequest struct {
	QueryParams GetDescribeEngineDefaultParametersQueryParams
	Headers     GetDescribeEngineDefaultParametersHeaders
}

type GetDescribeEngineDefaultParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
