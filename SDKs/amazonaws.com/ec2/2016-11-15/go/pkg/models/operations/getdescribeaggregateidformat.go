package operations




type GetDescribeAggregateIDFormatActionEnum string

const (
    GetDescribeAggregateIDFormatActionEnumDescribeAggregateIDFormat GetDescribeAggregateIDFormatActionEnum = "DescribeAggregateIdFormat"
)



type GetDescribeAggregateIDFormatVersionEnum string

const (
    GetDescribeAggregateIDFormatVersionEnumTwoThousandAndSixteen1115 GetDescribeAggregateIDFormatVersionEnum = "2016-11-15"
)


type GetDescribeAggregateIDFormatQueryParams struct {
    Action GetDescribeAggregateIDFormatActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetDescribeAggregateIDFormatVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeAggregateIDFormatHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeAggregateIDFormatRequest struct {
    QueryParams GetDescribeAggregateIDFormatQueryParams 
    Headers GetDescribeAggregateIDFormatHeaders 
    
}

type GetDescribeAggregateIDFormatResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

