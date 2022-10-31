package operations




type GetDescribeByoipCidrsActionEnum string

const (
    GetDescribeByoipCidrsActionEnumDescribeByoipCidrs GetDescribeByoipCidrsActionEnum = "DescribeByoipCidrs"
)



type GetDescribeByoipCidrsVersionEnum string

const (
    GetDescribeByoipCidrsVersionEnumTwoThousandAndSixteen1115 GetDescribeByoipCidrsVersionEnum = "2016-11-15"
)


type GetDescribeByoipCidrsQueryParams struct {
    Action GetDescribeByoipCidrsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    MaxResults int64 `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version GetDescribeByoipCidrsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeByoipCidrsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeByoipCidrsRequest struct {
    QueryParams GetDescribeByoipCidrsQueryParams 
    Headers GetDescribeByoipCidrsHeaders 
    
}

type GetDescribeByoipCidrsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

