package operations

import (
"time")


type GetDescribeEnvironmentsActionEnum string

const (
    GetDescribeEnvironmentsActionEnumDescribeEnvironments GetDescribeEnvironmentsActionEnum = "DescribeEnvironments"
)



type GetDescribeEnvironmentsVersionEnum string

const (
    GetDescribeEnvironmentsVersionEnumTwoThousandAndTen1201 GetDescribeEnvironmentsVersionEnum = "2010-12-01"
)


type GetDescribeEnvironmentsQueryParams struct {
    Action GetDescribeEnvironmentsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ApplicationName *string `queryParam:"style=form,explode=true,name=ApplicationName"`
    EnvironmentIds []string `queryParam:"style=form,explode=true,name=EnvironmentIds"`
    EnvironmentNames []string `queryParam:"style=form,explode=true,name=EnvironmentNames"`
    IncludeDeleted *bool `queryParam:"style=form,explode=true,name=IncludeDeleted"`
    IncludedDeletedBackTo *time.Time `queryParam:"style=form,explode=true,name=IncludedDeletedBackTo"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version GetDescribeEnvironmentsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VersionLabel *string `queryParam:"style=form,explode=true,name=VersionLabel"`
    
}

type GetDescribeEnvironmentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeEnvironmentsRequest struct {
    QueryParams GetDescribeEnvironmentsQueryParams 
    Headers GetDescribeEnvironmentsHeaders 
    
}

type GetDescribeEnvironmentsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

