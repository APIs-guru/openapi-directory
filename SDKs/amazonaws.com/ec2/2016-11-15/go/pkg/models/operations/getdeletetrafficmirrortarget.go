package operations




type GetDeleteTrafficMirrorTargetActionEnum string

const (
    GetDeleteTrafficMirrorTargetActionEnumDeleteTrafficMirrorTarget GetDeleteTrafficMirrorTargetActionEnum = "DeleteTrafficMirrorTarget"
)



type GetDeleteTrafficMirrorTargetVersionEnum string

const (
    GetDeleteTrafficMirrorTargetVersionEnumTwoThousandAndSixteen1115 GetDeleteTrafficMirrorTargetVersionEnum = "2016-11-15"
)


type GetDeleteTrafficMirrorTargetQueryParams struct {
    Action GetDeleteTrafficMirrorTargetActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    TrafficMirrorTargetID string `queryParam:"style=form,explode=true,name=TrafficMirrorTargetId"`
    Version GetDeleteTrafficMirrorTargetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteTrafficMirrorTargetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteTrafficMirrorTargetRequest struct {
    QueryParams GetDeleteTrafficMirrorTargetQueryParams 
    Headers GetDeleteTrafficMirrorTargetHeaders 
    
}

type GetDeleteTrafficMirrorTargetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

