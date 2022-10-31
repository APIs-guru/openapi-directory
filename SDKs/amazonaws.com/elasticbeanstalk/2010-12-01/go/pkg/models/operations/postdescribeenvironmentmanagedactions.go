package operations




type PostDescribeEnvironmentManagedActionsActionEnum string

const (
    PostDescribeEnvironmentManagedActionsActionEnumDescribeEnvironmentManagedActions PostDescribeEnvironmentManagedActionsActionEnum = "DescribeEnvironmentManagedActions"
)



type PostDescribeEnvironmentManagedActionsVersionEnum string

const (
    PostDescribeEnvironmentManagedActionsVersionEnumTwoThousandAndTen1201 PostDescribeEnvironmentManagedActionsVersionEnum = "2010-12-01"
)


type PostDescribeEnvironmentManagedActionsQueryParams struct {
    Action PostDescribeEnvironmentManagedActionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeEnvironmentManagedActionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeEnvironmentManagedActionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeEnvironmentManagedActionsRequest struct {
    QueryParams PostDescribeEnvironmentManagedActionsQueryParams 
    Headers PostDescribeEnvironmentManagedActionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeEnvironmentManagedActionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

