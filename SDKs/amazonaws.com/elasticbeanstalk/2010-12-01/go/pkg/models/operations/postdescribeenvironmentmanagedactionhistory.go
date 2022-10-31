package operations




type PostDescribeEnvironmentManagedActionHistoryActionEnum string

const (
    PostDescribeEnvironmentManagedActionHistoryActionEnumDescribeEnvironmentManagedActionHistory PostDescribeEnvironmentManagedActionHistoryActionEnum = "DescribeEnvironmentManagedActionHistory"
)



type PostDescribeEnvironmentManagedActionHistoryVersionEnum string

const (
    PostDescribeEnvironmentManagedActionHistoryVersionEnumTwoThousandAndTen1201 PostDescribeEnvironmentManagedActionHistoryVersionEnum = "2010-12-01"
)


type PostDescribeEnvironmentManagedActionHistoryQueryParams struct {
    Action PostDescribeEnvironmentManagedActionHistoryActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeEnvironmentManagedActionHistoryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeEnvironmentManagedActionHistoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeEnvironmentManagedActionHistoryRequest struct {
    QueryParams PostDescribeEnvironmentManagedActionHistoryQueryParams 
    Headers PostDescribeEnvironmentManagedActionHistoryHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeEnvironmentManagedActionHistoryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

