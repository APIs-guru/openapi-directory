package operations




type GetDescribeFpgaImageAttributeActionEnum string

const (
    GetDescribeFpgaImageAttributeActionEnumDescribeFpgaImageAttribute GetDescribeFpgaImageAttributeActionEnum = "DescribeFpgaImageAttribute"
)



type GetDescribeFpgaImageAttributeAttributeEnum string

const (
    GetDescribeFpgaImageAttributeAttributeEnumDescription GetDescribeFpgaImageAttributeAttributeEnum = "description"
GetDescribeFpgaImageAttributeAttributeEnumName GetDescribeFpgaImageAttributeAttributeEnum = "name"
GetDescribeFpgaImageAttributeAttributeEnumLoadPermission GetDescribeFpgaImageAttributeAttributeEnum = "loadPermission"
GetDescribeFpgaImageAttributeAttributeEnumProductCodes GetDescribeFpgaImageAttributeAttributeEnum = "productCodes"
)



type GetDescribeFpgaImageAttributeVersionEnum string

const (
    GetDescribeFpgaImageAttributeVersionEnumTwoThousandAndSixteen1115 GetDescribeFpgaImageAttributeVersionEnum = "2016-11-15"
)


type GetDescribeFpgaImageAttributeQueryParams struct {
    Action GetDescribeFpgaImageAttributeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Attribute GetDescribeFpgaImageAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    FpgaImageID string `queryParam:"style=form,explode=true,name=FpgaImageId"`
    Version GetDescribeFpgaImageAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeFpgaImageAttributeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeFpgaImageAttributeRequest struct {
    QueryParams GetDescribeFpgaImageAttributeQueryParams 
    Headers GetDescribeFpgaImageAttributeHeaders 
    
}

type GetDescribeFpgaImageAttributeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

