package operations




type PostDescribeNetworkAclsActionEnum string

const (
    PostDescribeNetworkAclsActionEnumDescribeNetworkAcls PostDescribeNetworkAclsActionEnum = "DescribeNetworkAcls"
)



type PostDescribeNetworkAclsVersionEnum string

const (
    PostDescribeNetworkAclsVersionEnumTwoThousandAndSixteen1115 PostDescribeNetworkAclsVersionEnum = "2016-11-15"
)


type PostDescribeNetworkAclsQueryParams struct {
    Action PostDescribeNetworkAclsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeNetworkAclsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeNetworkAclsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeNetworkAclsRequest struct {
    QueryParams PostDescribeNetworkAclsQueryParams 
    Headers PostDescribeNetworkAclsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeNetworkAclsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

