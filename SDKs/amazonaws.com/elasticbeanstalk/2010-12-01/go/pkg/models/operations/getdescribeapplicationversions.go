package operations




type GetDescribeApplicationVersionsActionEnum string

const (
    GetDescribeApplicationVersionsActionEnumDescribeApplicationVersions GetDescribeApplicationVersionsActionEnum = "DescribeApplicationVersions"
)



type GetDescribeApplicationVersionsVersionEnum string

const (
    GetDescribeApplicationVersionsVersionEnumTwoThousandAndTen1201 GetDescribeApplicationVersionsVersionEnum = "2010-12-01"
)


type GetDescribeApplicationVersionsQueryParams struct {
    Action GetDescribeApplicationVersionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ApplicationName *string `queryParam:"style=form,explode=true,name=ApplicationName"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version GetDescribeApplicationVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VersionLabels []string `queryParam:"style=form,explode=true,name=VersionLabels"`
    
}

type GetDescribeApplicationVersionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeApplicationVersionsRequest struct {
    QueryParams GetDescribeApplicationVersionsQueryParams 
    Headers GetDescribeApplicationVersionsHeaders 
    
}

type GetDescribeApplicationVersionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

