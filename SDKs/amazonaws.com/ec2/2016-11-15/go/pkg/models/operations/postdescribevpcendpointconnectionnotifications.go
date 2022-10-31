package operations




type PostDescribeVpcEndpointConnectionNotificationsActionEnum string

const (
    PostDescribeVpcEndpointConnectionNotificationsActionEnumDescribeVpcEndpointConnectionNotifications PostDescribeVpcEndpointConnectionNotificationsActionEnum = "DescribeVpcEndpointConnectionNotifications"
)



type PostDescribeVpcEndpointConnectionNotificationsVersionEnum string

const (
    PostDescribeVpcEndpointConnectionNotificationsVersionEnumTwoThousandAndSixteen1115 PostDescribeVpcEndpointConnectionNotificationsVersionEnum = "2016-11-15"
)


type PostDescribeVpcEndpointConnectionNotificationsQueryParams struct {
    Action PostDescribeVpcEndpointConnectionNotificationsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeVpcEndpointConnectionNotificationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeVpcEndpointConnectionNotificationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeVpcEndpointConnectionNotificationsRequest struct {
    QueryParams PostDescribeVpcEndpointConnectionNotificationsQueryParams 
    Headers PostDescribeVpcEndpointConnectionNotificationsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeVpcEndpointConnectionNotificationsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

