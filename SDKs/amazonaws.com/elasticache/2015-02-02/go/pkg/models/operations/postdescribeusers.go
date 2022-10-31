package operations




type PostDescribeUsersActionEnum string

const (
    PostDescribeUsersActionEnumDescribeUsers PostDescribeUsersActionEnum = "DescribeUsers"
)



type PostDescribeUsersVersionEnum string

const (
    PostDescribeUsersVersionEnumTwoThousandAndFifteen0202 PostDescribeUsersVersionEnum = "2015-02-02"
)


type PostDescribeUsersQueryParams struct {
    Action PostDescribeUsersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeUsersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeUsersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeUsersRequest struct {
    QueryParams PostDescribeUsersQueryParams 
    Headers PostDescribeUsersHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeUsersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

