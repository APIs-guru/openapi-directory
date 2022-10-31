package operations




type GetDeleteFpgaImageActionEnum string

const (
    GetDeleteFpgaImageActionEnumDeleteFpgaImage GetDeleteFpgaImageActionEnum = "DeleteFpgaImage"
)



type GetDeleteFpgaImageVersionEnum string

const (
    GetDeleteFpgaImageVersionEnumTwoThousandAndSixteen1115 GetDeleteFpgaImageVersionEnum = "2016-11-15"
)


type GetDeleteFpgaImageQueryParams struct {
    Action GetDeleteFpgaImageActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    FpgaImageID string `queryParam:"style=form,explode=true,name=FpgaImageId"`
    Version GetDeleteFpgaImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteFpgaImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteFpgaImageRequest struct {
    QueryParams GetDeleteFpgaImageQueryParams 
    Headers GetDeleteFpgaImageHeaders 
    
}

type GetDeleteFpgaImageResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

