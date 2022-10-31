package operations




type PostDescribeUpdateActionsActionEnum string

const (
    PostDescribeUpdateActionsActionEnumDescribeUpdateActions PostDescribeUpdateActionsActionEnum = "DescribeUpdateActions"
)



type PostDescribeUpdateActionsVersionEnum string

const (
    PostDescribeUpdateActionsVersionEnumTwoThousandAndFifteen0202 PostDescribeUpdateActionsVersionEnum = "2015-02-02"
)


type PostDescribeUpdateActionsQueryParams struct {
    Action PostDescribeUpdateActionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeUpdateActionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeUpdateActionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeUpdateActionsRequest struct {
    QueryParams PostDescribeUpdateActionsQueryParams 
    Headers PostDescribeUpdateActionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeUpdateActionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

