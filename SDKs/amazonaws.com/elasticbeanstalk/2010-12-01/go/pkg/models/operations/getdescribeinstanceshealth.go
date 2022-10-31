package operations

import (
"openapi/pkg/models/shared")


type GetDescribeInstancesHealthActionEnum string

const (
    GetDescribeInstancesHealthActionEnumDescribeInstancesHealth GetDescribeInstancesHealthActionEnum = "DescribeInstancesHealth"
)



type GetDescribeInstancesHealthVersionEnum string

const (
    GetDescribeInstancesHealthVersionEnumTwoThousandAndTen1201 GetDescribeInstancesHealthVersionEnum = "2010-12-01"
)


type GetDescribeInstancesHealthQueryParams struct {
    Action GetDescribeInstancesHealthActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AttributeNames []shared.InstancesHealthAttributeEnum `queryParam:"style=form,explode=true,name=AttributeNames"`
    EnvironmentID *string `queryParam:"style=form,explode=true,name=EnvironmentId"`
    EnvironmentName *string `queryParam:"style=form,explode=true,name=EnvironmentName"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version GetDescribeInstancesHealthVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeInstancesHealthHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeInstancesHealthRequest struct {
    QueryParams GetDescribeInstancesHealthQueryParams 
    Headers GetDescribeInstancesHealthHeaders 
    
}

type GetDescribeInstancesHealthResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

