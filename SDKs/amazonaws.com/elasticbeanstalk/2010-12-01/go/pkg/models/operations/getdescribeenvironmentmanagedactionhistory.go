package operations




type GetDescribeEnvironmentManagedActionHistoryActionEnum string

const (
    GetDescribeEnvironmentManagedActionHistoryActionEnumDescribeEnvironmentManagedActionHistory GetDescribeEnvironmentManagedActionHistoryActionEnum = "DescribeEnvironmentManagedActionHistory"
)



type GetDescribeEnvironmentManagedActionHistoryVersionEnum string

const (
    GetDescribeEnvironmentManagedActionHistoryVersionEnumTwoThousandAndTen1201 GetDescribeEnvironmentManagedActionHistoryVersionEnum = "2010-12-01"
)


type GetDescribeEnvironmentManagedActionHistoryQueryParams struct {
    Action GetDescribeEnvironmentManagedActionHistoryActionEnum `queryParam:"style=form,explode=true,name=Action"`
    EnvironmentID *string `queryParam:"style=form,explode=true,name=EnvironmentId"`
    EnvironmentName *string `queryParam:"style=form,explode=true,name=EnvironmentName"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version GetDescribeEnvironmentManagedActionHistoryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeEnvironmentManagedActionHistoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeEnvironmentManagedActionHistoryRequest struct {
    QueryParams GetDescribeEnvironmentManagedActionHistoryQueryParams 
    Headers GetDescribeEnvironmentManagedActionHistoryHeaders 
    
}

type GetDescribeEnvironmentManagedActionHistoryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

