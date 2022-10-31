package operations




type GetDescribeMetricCollectionTypesActionEnum string

const (
    GetDescribeMetricCollectionTypesActionEnumDescribeMetricCollectionTypes GetDescribeMetricCollectionTypesActionEnum = "DescribeMetricCollectionTypes"
)



type GetDescribeMetricCollectionTypesVersionEnum string

const (
    GetDescribeMetricCollectionTypesVersionEnumTwoThousandAndEleven0101 GetDescribeMetricCollectionTypesVersionEnum = "2011-01-01"
)


type GetDescribeMetricCollectionTypesQueryParams struct {
    Action GetDescribeMetricCollectionTypesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version GetDescribeMetricCollectionTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeMetricCollectionTypesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeMetricCollectionTypesRequest struct {
    QueryParams GetDescribeMetricCollectionTypesQueryParams 
    Headers GetDescribeMetricCollectionTypesHeaders 
    
}

type GetDescribeMetricCollectionTypesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

