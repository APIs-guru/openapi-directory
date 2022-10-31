package operations




type PostDescribeSecurityGroupsActionEnum string

const (
    PostDescribeSecurityGroupsActionEnumDescribeSecurityGroups PostDescribeSecurityGroupsActionEnum = "DescribeSecurityGroups"
)



type PostDescribeSecurityGroupsVersionEnum string

const (
    PostDescribeSecurityGroupsVersionEnumTwoThousandAndSixteen1115 PostDescribeSecurityGroupsVersionEnum = "2016-11-15"
)


type PostDescribeSecurityGroupsQueryParams struct {
    Action PostDescribeSecurityGroupsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeSecurityGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeSecurityGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeSecurityGroupsRequest struct {
    QueryParams PostDescribeSecurityGroupsQueryParams 
    Headers PostDescribeSecurityGroupsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeSecurityGroupsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

