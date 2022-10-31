package operations

import (
"time")


type GetEnableImageDeprecationActionEnum string

const (
    GetEnableImageDeprecationActionEnumEnableImageDeprecation GetEnableImageDeprecationActionEnum = "EnableImageDeprecation"
)



type GetEnableImageDeprecationVersionEnum string

const (
    GetEnableImageDeprecationVersionEnumTwoThousandAndSixteen1115 GetEnableImageDeprecationVersionEnum = "2016-11-15"
)


type GetEnableImageDeprecationQueryParams struct {
    Action GetEnableImageDeprecationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DeprecateAt time.Time `queryParam:"style=form,explode=true,name=DeprecateAt"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    ImageID string `queryParam:"style=form,explode=true,name=ImageId"`
    Version GetEnableImageDeprecationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetEnableImageDeprecationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetEnableImageDeprecationRequest struct {
    QueryParams GetEnableImageDeprecationQueryParams 
    Headers GetEnableImageDeprecationHeaders 
    
}

type GetEnableImageDeprecationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

