package operations




type GetCopyFpgaImageActionEnum string

const (
    GetCopyFpgaImageActionEnumCopyFpgaImage GetCopyFpgaImageActionEnum = "CopyFpgaImage"
)



type GetCopyFpgaImageVersionEnum string

const (
    GetCopyFpgaImageVersionEnumTwoThousandAndSixteen1115 GetCopyFpgaImageVersionEnum = "2016-11-15"
)


type GetCopyFpgaImageQueryParams struct {
    Action GetCopyFpgaImageActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ClientToken *string `queryParam:"style=form,explode=true,name=ClientToken"`
    Description *string `queryParam:"style=form,explode=true,name=Description"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Name *string `queryParam:"style=form,explode=true,name=Name"`
    SourceFpgaImageID string `queryParam:"style=form,explode=true,name=SourceFpgaImageId"`
    SourceRegion string `queryParam:"style=form,explode=true,name=SourceRegion"`
    Version GetCopyFpgaImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCopyFpgaImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCopyFpgaImageRequest struct {
    QueryParams GetCopyFpgaImageQueryParams 
    Headers GetCopyFpgaImageHeaders 
    
}

type GetCopyFpgaImageResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

