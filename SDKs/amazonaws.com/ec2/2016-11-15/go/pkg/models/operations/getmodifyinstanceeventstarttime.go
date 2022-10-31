package operations

import (
"time")


type GetModifyInstanceEventStartTimeActionEnum string

const (
    GetModifyInstanceEventStartTimeActionEnumModifyInstanceEventStartTime GetModifyInstanceEventStartTimeActionEnum = "ModifyInstanceEventStartTime"
)



type GetModifyInstanceEventStartTimeVersionEnum string

const (
    GetModifyInstanceEventStartTimeVersionEnumTwoThousandAndSixteen1115 GetModifyInstanceEventStartTimeVersionEnum = "2016-11-15"
)


type GetModifyInstanceEventStartTimeQueryParams struct {
    Action GetModifyInstanceEventStartTimeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    InstanceEventID string `queryParam:"style=form,explode=true,name=InstanceEventId"`
    InstanceID string `queryParam:"style=form,explode=true,name=InstanceId"`
    NotBefore time.Time `queryParam:"style=form,explode=true,name=NotBefore"`
    Version GetModifyInstanceEventStartTimeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyInstanceEventStartTimeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyInstanceEventStartTimeRequest struct {
    QueryParams GetModifyInstanceEventStartTimeQueryParams 
    Headers GetModifyInstanceEventStartTimeHeaders 
    
}

type GetModifyInstanceEventStartTimeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

