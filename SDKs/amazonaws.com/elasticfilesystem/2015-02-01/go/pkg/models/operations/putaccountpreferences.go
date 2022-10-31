package operations

import (
"openapi/pkg/models/shared")

type PutAccountPreferencesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type PutAccountPreferencesRequestBodyResourceIDTypeEnum string

const (
    PutAccountPreferencesRequestBodyResourceIDTypeEnumLongID PutAccountPreferencesRequestBodyResourceIDTypeEnum = "LONG_ID"
PutAccountPreferencesRequestBodyResourceIDTypeEnumShortID PutAccountPreferencesRequestBodyResourceIDTypeEnum = "SHORT_ID"
)


type PutAccountPreferencesRequestBody struct {
    ResourceIDType PutAccountPreferencesRequestBodyResourceIDTypeEnum `json:"ResourceIdType"`
    
}

type PutAccountPreferencesRequest struct {
    Headers PutAccountPreferencesHeaders 
    Request PutAccountPreferencesRequestBody `request:"mediaType=application/json"`
    
}

type PutAccountPreferencesResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    PutAccountPreferencesResponse *shared.PutAccountPreferencesResponse 
    StatusCode int64 
    
}

