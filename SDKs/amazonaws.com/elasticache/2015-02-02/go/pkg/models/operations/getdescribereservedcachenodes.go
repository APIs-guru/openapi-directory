package operations

type GetDescribeReservedCacheNodesActionEnum string

const (
	GetDescribeReservedCacheNodesActionEnumDescribeReservedCacheNodes GetDescribeReservedCacheNodesActionEnum = "DescribeReservedCacheNodes"
)

type GetDescribeReservedCacheNodesVersionEnum string

const (
	GetDescribeReservedCacheNodesVersionEnumTwoThousandAndFifteen0202 GetDescribeReservedCacheNodesVersionEnum = "2015-02-02"
)

type GetDescribeReservedCacheNodesQueryParams struct {
	Action                       GetDescribeReservedCacheNodesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CacheNodeType                *string                                  `queryParam:"style=form,explode=true,name=CacheNodeType"`
	Duration                     *string                                  `queryParam:"style=form,explode=true,name=Duration"`
	Marker                       *string                                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords                   *int64                                   `queryParam:"style=form,explode=true,name=MaxRecords"`
	OfferingType                 *string                                  `queryParam:"style=form,explode=true,name=OfferingType"`
	ProductDescription           *string                                  `queryParam:"style=form,explode=true,name=ProductDescription"`
	ReservedCacheNodeID          *string                                  `queryParam:"style=form,explode=true,name=ReservedCacheNodeId"`
	ReservedCacheNodesOfferingID *string                                  `queryParam:"style=form,explode=true,name=ReservedCacheNodesOfferingId"`
	Version                      GetDescribeReservedCacheNodesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeReservedCacheNodesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeReservedCacheNodesRequest struct {
	QueryParams GetDescribeReservedCacheNodesQueryParams
	Headers     GetDescribeReservedCacheNodesHeaders
}

type GetDescribeReservedCacheNodesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
